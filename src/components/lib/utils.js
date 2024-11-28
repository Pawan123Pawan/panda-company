import { twMerge } from 'tailwind-merge';
import clsx from 'clsx'; // Don't forget to import clsx if it's not already imported

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
