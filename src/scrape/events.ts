import { intf, ofLua, property, typdecl } from "../ir/ir";
import factorio from "../../factorio.json";
import { getComplexValue } from './concepts';

const { events: rawEvents } = factorio;
type EventType = typeof rawEvents[0];

const testEvent = '';
const eventsForParsing = testEvent.length > 0 ? rawEvents.filter(({ name }) => name === testEvent) : rawEvents;

export const scrapeEvents = () => eventsForParsing.map((event: EventType) => {
  const { name, description, data = [] } = event;

  return typdecl({
    name,
    description,
    type: intf({
      name,
      // @ts-ignore
      membersByName: data.filter(field => {
        console.log('Skipping lazy-loaded value: ', field.name);
        return field.type?.complex_type !== 'LuaLazyLoadedValue';
      })
      // @ts-ignore
          .reduce((acc, curr) => {
        acc[curr.name] = property({
          ...curr,
          type: getComplexValue(curr.type, curr.optional),
        });
        return acc;
      }, {}),
    }),
  });
})
