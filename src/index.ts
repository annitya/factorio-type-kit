import { getDefinesFromJson } from './scrape/defines';
import { scrapeConcepts } from './scrape/concepts';

export { print as printTs } from "./printers/typescript/factorio";

export const produce = () => {
    const defines = getDefinesFromJson();
    const concepts = scrapeConcepts();

    return { defines, concepts /*, events, classSchemas */ };
};

export type GenerateResult = ReturnType<typeof produce>;
