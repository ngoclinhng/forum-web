import { parseISO } from 'date-fns';

export default function parseDate(date) {
  if (date instanceof Date) {
    return date;
  }

  return parseISO(date);
}
