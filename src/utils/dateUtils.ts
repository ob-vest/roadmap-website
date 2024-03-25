import { formatDistance } from "date-fns";

export function distanceFromDate(itemDate: Date) {
  return formatDistance(itemDate, new Date(), {
    addSuffix: true,
  });
}
