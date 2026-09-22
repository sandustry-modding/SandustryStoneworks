import { ELEMENT } from "../shared/ids.ts";

const api = sandkit.api;

/**
 * Step 1 steel machine recipes:
 * - Press: Iron Ore → Crushed Iron
 * - Smelter: Crushed Iron → Molten Iron
 *
 * Steel finish (2 molten iron neighbors + 1 coal) runs on the worker.
 */
export function register(): void {
  const ironOre = api.elements.getTypeById(ELEMENT.ironOre);
  const crushedIron = api.elements.getTypeById(ELEMENT.crushedIron);
  const moltenIron = api.elements.getTypeById(ELEMENT.moltenIron);

  api.structures.recipes.register("kineticPress", {
    input: ironOre,
    minimumDownwardVelocity: 20,
    outputs: [{ elementType: crushedIron, chance: 1 }],
  });

  api.structures.recipes.register("smelter", {
    input: crushedIron,
    outputs: [{ elementType: moltenIron, chance: 1 }],
  });
}
