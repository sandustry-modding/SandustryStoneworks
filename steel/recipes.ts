import { ELEMENT } from "../shared/ids.ts";

const api = sandkit.api;

/**
 * Step 1 steel recipes:
 * - Press: Iron Ore → Crushed Iron
 * - Smelter: Crushed Iron → Molten Steel
 * - Contact: Molten Steel + Coal → Steel (coal consumed)
 */
export function register(): void {
  const ironOre = api.elements.getTypeById(ELEMENT.ironOre);
  const crushedIron = api.elements.getTypeById(ELEMENT.crushedIron);
  const moltenSteel = api.elements.getTypeById(ELEMENT.moltenSteel);
  const coal = api.elements.getTypeById(ELEMENT.coal);
  const steel = api.elements.getTypeById(ELEMENT.steel);

  api.structures.recipes.register("kineticPress", {
    input: ironOre,
    minimumDownwardVelocity: 20,
    outputs: [{ elementType: crushedIron, chance: 1 }],
  });

  api.structures.recipes.register("smelter", {
    input: crushedIron,
    outputs: [{ elementType: moltenSteel, chance: 1 }],
  });

  api.reactions.registerContact({
    inputA: moltenSteel,
    inputB: coal,
    outputA: steel,
    outputB: null,
    orientation: "any",
  });
}
