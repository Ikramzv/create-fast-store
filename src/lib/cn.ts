import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: any[]) {
  return twMerge(clsx(...classes));
}

export default cn;
