import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const truncateString = (text: string, limit: number) => {
  if (text?.length > limit) return text.slice(0, limit) + " ...";
  return text;
};
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}


export function shortName(item?: string) {
  if (!item) return "UN";
  const shortName = item
    .split(" ")
    .map((n) => n[0])
    .join("");
  return shortName;
}

export function truncateText(text?: string) {
  if (!text) return "";
  const maxLength = 100;
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  return truncatedText;
}

