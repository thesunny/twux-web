import { twux } from "twux";

export const grid = {
  root: twux("grid grid-cols-1 md:grid-cols-2 gap-4 items-center", "div"),
  item: twux("col-span-1", "div"),
};
