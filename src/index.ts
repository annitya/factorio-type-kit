import { getDefinesFromJson } from './scrape/defines';
import { scrapeConcepts } from './scrape/concepts';
import { scrapeEvents } from './scrape/events';
import { scrapeClasses } from './scrape/classes';

export { print as printTs } from "./printers/typescript/factorio";

export const produce = () => {
    const defines = getDefinesFromJson();
    const concepts = scrapeConcepts();
    const events = scrapeEvents();
    const classSchemas = scrapeClasses();
    // scrape-raw

    return { defines, concepts, events, classSchemas };
};

export type GenerateResult = ReturnType<typeof produce>;
