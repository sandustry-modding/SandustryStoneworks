import { modinfo } from "../modinfo.ts";

const root = modinfo.id;

export const ELEMENT = {
  gravel: `${root}:gravel`,
  crushedStone: `${root}:crushedStone`,
  ironOre: `${root}:ironOre`,
  coal: `${root}:coal`,
  crushedIron: `${root}:crushedIron`,
  moltenSteel: `${root}:moltenSteel`,
  steel: `${root}:steel`,
} as const;

export const NAME_KEY = {
  gravel: `${root}.element.gravel.name`,
  crushedStone: `${root}.element.crushedStone.name`,
  ironOre: `${root}.element.ironOre.name`,
  coal: `${root}.element.coal.name`,
  crushedIron: `${root}.element.crushedIron.name`,
  moltenSteel: `${root}.element.moltenSteel.name`,
  steel: `${root}.element.steel.name`,
} as const;
