import { ELEMENT } from "../shared/ids.ts";

/**
 * Exclusive even pick on gravel:
 * - Crushed Stone stays on the shaker (up)
 * - Iron Ore / Coal eject below (y+2), like wet-sand gold
 */
export function registerWorker(): void {
  const api = sandkit.api;
  const gravel = api.elements.getTypeById(ELEMENT.gravel);
  const crushedStone = api.elements.getTypeById(ELEMENT.crushedStone);
  const ironOre = api.elements.getTypeById(ELEMENT.ironOre);
  const coal = api.elements.getTypeById(ELEMENT.coal);

  const downOutputs = [ironOre, coal];

  type ShakerArgs = { elementType?: unknown; x?: unknown; y?: unknown };

  api.hooks.intercept("shaker:elementOn", (rawArgs, context) => {
    const args = rawArgs as ShakerArgs;
    if (args.elementType !== gravel) return;
    const x = args.x;
    const y = args.y;
    if (typeof x !== "number" || typeof y !== "number") return;

    const roll = (Math.random() * 3) | 0;

    if (roll === 0) {
      api.elements.replaceAtCell(x, y, crushedStone, { isFreeFalling: false });
      context.cancel();
      return;
    }

    const belowY = y + 2;
    if (!api.grid.isCellEmptyAtCell(x, belowY)) return;

    const pick = downOutputs[roll - 1];
    api.elements.removeAtCell(x, y);
    api.elements.createAtCell(x, belowY, pick);
    context.cancel();
  });
}
