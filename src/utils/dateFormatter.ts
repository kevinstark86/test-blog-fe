import {format} from 'date-fns';

export default function dateFormatter(date: string) {
  const dateObject = new Date(date);
  const formattedDate = format(dateObject, 'MM/dd/yyyy h:mm a');
  return formattedDate;
}
