import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to cleanly merge Tailwind CSS classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
