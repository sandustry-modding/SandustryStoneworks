import { modinfo } from "../modinfo.ts";

const root = modinfo.id;

export const ELEMENT = {
  gravel: `${root}:gravel`,
  crushedStone: `${root}:crushedStone`,
  ironOre: `${root}:ironOre`,
  coal: `${root}:coal`,
  crushedIron: `${root}:crushedIron`,
  moltenIron: `${root}:moltenIron`,
  steel: `${root}:steel`,
} as const;

export const NAME_KEY = {
  gravel: `${root}.element.gravel.name`,
  crushedStone: `${root}.element.crushedStone.name`,
  ironOre: `${root}.element.ironOre.name`,
  coal: `${root}.element.coal.name`,
  crushedIron: `${root}.element.crushedIron.name`,
  moltenIron: `${root}.element.moltenIron.name`,
  steel: `${root}.element.steel.name`,
} as const;
