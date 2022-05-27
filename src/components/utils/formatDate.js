import { format } from 'date-fns';
import parseDate from './parseDate';

export default function formatDate(dateToFormat, formatString) {
  const date = parseDate(dateToFormat);
  return format(date, formatString);
}
