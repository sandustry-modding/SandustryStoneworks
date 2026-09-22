import { modinfo } from "../modinfo.ts";

const root = modinfo.id;

export const ELEMENT = {
  gravel: `${root}:gravel`,
} as const;

export const NAME_KEY = {
  gravel: `${root}.element.gravel.name`,
} as const;
