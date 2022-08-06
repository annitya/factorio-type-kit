import { getDefinesFromJson } from './scrape/defines';

export { print as printTs } from "./printers/typescript/factorio";

export const produce = () => {
    const defines = getDefinesFromJson();
    return { defines /*, concepts, events, classSchemas */ };
};

export type GenerateResult = ReturnType<typeof produce>;
