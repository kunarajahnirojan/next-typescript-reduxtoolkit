import { format } from 'date-fns';

export function formatDate(date: any) {
  return format(date, 'DD-MM-YYYY');
}

export function formatTime(time: any) {
  return format(time, 'HH:MM:SS');
}
