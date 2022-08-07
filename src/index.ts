import { getDefinesFromJson } from './scrape/defines';
import { scrapeConcepts } from './scrape/concepts';
import { scrapeEvents } from './scrape/events';

export { print as printTs } from "./printers/typescript/factorio";

export const produce = () => {
    const defines = getDefinesFromJson();
    const concepts = scrapeConcepts();
    const events = scrapeEvents();

    return { defines, concepts, events, /* classSchemas */ };
};

export type GenerateResult = ReturnType<typeof produce>;
