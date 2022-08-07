import {
    arr,
    typdecl,
    ofLua,
    struct,
    union, intf, property, map, literal
} from "../ir/ir";

import factorio from "../../factorio.json";

const { concepts: rawConcepts } = factorio;
type RawConcept = typeof rawConcepts[0];

// @ts-ignore
export const scrapeConcept = (rawConcept: RawConcept, isRoot = false, optional = false) => {
    const { name, description, type } = rawConcept;

    if (['LocalisedString', 'CircularProjectileCreationSpecification'].includes(name)) {
        throw new Error(`Not doing it: ${name}`);
    }
    // @ts-ignore
    if (['float', 'string'].includes(type)) {
        return typdecl({
            name,
            description,
            // @ts-ignore
            type: ofLua(type, optional),
        });
    }

    // @ts-ignore
    const { complex_type } = type;
    let valueType;

    switch (complex_type) {
        case 'array':
            // @ts-ignore
            valueType = getComplexValue(type.value, optional);

            if (!isRoot) {
                return valueType;
            }

            return property({
                name,
                description,
                type: arr({
                    valueType,
                    description
                })
            })
        case 'dictionary':
            // @ts-ignore
            valueType = getComplexValue(type.value, optional);
            // @ts-ignore
            let keyType = getComplexValue(type.key, optional);

            const mapType = map({
                keyType,
                valueType,
                description
            });

            if (!isRoot) {
                return mapType;
            }

            return property({
                name,
                description,
                type: mapType
            });

        case 'function':
            throw new Error('Unhandled: function');
        case 'literal':
            // @ts-ignore
            let value = type.value;

            if (!['number', 'boolean'].includes(typeof value)) {
                value = `"${value}"`
            }

            return literal({
                // @ts-ignore
                value,
                description,
            });
        case 'LuaCustomTable':
            throw new Error('Unhandled: LuaCustomTable');
        case 'LuaLazyLoadedValue':
            throw new Error('Unhandled: LuaLazyLoadedValue');
        case 'struct':
            // @ts-ignore
            const { attributes = [] } = type;

            return intf({
                name,
                description,
                // @ts-ignore
                membersByName: attributes.map(attribute => getComplexValue(attribute, optional))
            })
        case 'type':
            // @ts-ignore
            return getComplexValue(type?.value || type?.type, optional);
        case 'table':
            // @ts-ignore
            const { parameters = [] } = type;

            return intf({
                name,
                description,
                // @ts-ignore
                membersByName: parameters.map(parameter => getComplexValue(parameter, optional))
            });
        case 'tuple':
            // @ts-ignore
            const { parameters: tupleParameters = [] } = type;

            const tupleStrings = tupleParameters
                // @ts-ignore
                .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
                // @ts-ignore
                .map(parameter => parameter.type);

            return literal({
                value: JSON.stringify(tupleStrings)
            });
        case 'union':
            // @ts-ignore
            const { options = [] } = type;

            const unionType = union({
                description,
                // @ts-ignore
                members: options.map(option => getComplexValue(option, optional))
            });

            if (!isRoot) {
                return unionType;
            }

            return property({
                name,
                description,
                type: unionType
            });
        default:
            throw new Error(`Unknown complex type: ${complex_type}`);
    }
}

// @ts-ignore
export const getComplexValue = (value: any, optional: boolean) => {
    if (typeof value === "string") {
        return ofLua(value, optional);
    }

    if (value?.complex_type) {
        // @ts-ignore
        return scrapeConcept({ type: value }, false, optional);
    }

    // @ts-ignore
    const { name, type, description, optional: typeOptional } = value;

    if (typeof type === "string") {
        let parsedName = name.includes('-') ? `"${name}"` : name;

        return property({
            name: parsedName,
            description,
            type: ofLua(type, typeOptional)
        });
    }

    if (typeof value?.type === 'object') {
        return scrapeConcept(value, true, optional);
    }

    // @ts-ignore
    return scrapeConcept({ type }, false, optional);
}

const testObject = '';
const conceptsForParsing = testObject.length > 0 ? rawConcepts.filter(concept => concept.name === testObject) : rawConcepts;

let failCount = 0;

export const scrapeConcepts = () => conceptsForParsing.map(concept => {
    try {
        const scrapedConcept = scrapeConcept(concept, true);
        const { name, description } = concept;

        const { __type } = scrapedConcept;

        if (__type === 'union') {
            return typdecl({
                name,
                description,
                type: scrapedConcept
            })
        }

        if (!['interface', 'type', 'typedecl'].includes(__type)) {
            return intf({
                name,
                description,
                isRoot: true,
                // @ts-ignore
                membersByName: [scrapedConcept]
            })
        }

        return {
            ...scrapedConcept,
            isRoot: true
        }
    } catch (e) {
        console.error('Concept parsing failed:', concept.name, e);
        failCount++;
        console.error(`Failed: ${failCount}`);
        return;
    }

}).filter(Boolean) as [];
