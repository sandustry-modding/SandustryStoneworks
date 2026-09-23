import { ELEMENT } from "../../../shared/ids.ts";

const api = sandkit.api;

/**
 * Step 1 steel machine recipe:
 * - Smelter: Iron Ore → Molten Iron
 * - Smelter: Iron → Molten Iron (remelt cooled metal)
 * - Water + Molten Iron → Steam + Iron (quench)
 *
 * A light residue cell on top of a fresh melt, and the 2-neighbor steel
 * finish, both run on the worker.
 */
export function register(): void {
  const ironOre = api.elements.getTypeById(ELEMENT.ironOre);
  const moltenIron = api.elements.getTypeById(ELEMENT.moltenIron);
  const iron = api.elements.getTypeById(ELEMENT.iron);
  const water = api.elements.getTypeById("water");
  const steam = api.elements.getTypeById("steam");

  api.structures.recipes.register("smelter", {
    input: ironOre,
    outputs: [{ elementType: moltenIron, chance: 1 }],
  });

  api.structures.recipes.register("smelter", {
    input: iron,
    outputs: [{ elementType: moltenIron, chance: 1 }],
  });

  api.reactions.registerContact({
    inputA: water,
    inputB: moltenIron,
    outputA: steam,
    outputB: iron,
    orientation: "any",
  });
}
