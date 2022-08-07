import { cls, property, sym } from "../ir/ir";

import factorio from "../../factorio.json";
import { getComplexValue } from './concepts';

const { classes: rawClasses } = factorio;
type ClassType = typeof rawClasses[0];

const testObject = '';
const classesForParsing = testObject.length > 0 ? rawClasses.filter(({ name }) => name === testObject) : rawClasses;

export const scrapeClasses = () =>
    classesForParsing.map((classDefinition: ClassType) => {
        const { name, description, attributes = [] /*,  methods = [] */, base_classes = [] } = classDefinition;
        // @ts-ignore
        const members = attributes.filter(field => {
            console.log('Skipping lua custom-table value: ', field.name);
            return field.type?.complex_type !== 'LuaCustomTable';
            // @ts-ignore
        }).map(attribute => {
            return property({
                ...attribute,
                type: getComplexValue(attribute.type, attribute.optional),
            })
        });

        return cls({
            name,
            description,
            // @ts-ignore
            members,
            inherits: base_classes.map((className) => sym({ text: className }))
        });
    });
