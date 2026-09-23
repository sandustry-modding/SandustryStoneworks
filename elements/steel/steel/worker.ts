import { ELEMENT } from "../../../shared/ids.ts";

const NEIGHBOR_OFFSETS: ReadonlyArray<readonly [number, number]> = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

/**
 * One-shot steel: coal with at least two molten-iron neighbors
 * consumes this coal + two molten iron cells → steel (net 2 iron : 1 coal).
 */
export function registerWorker(): void {
  const api = sandkit.api;
  const coal = api.elements.getTypeById(ELEMENT.coal);
  const moltenIron = api.elements.getTypeById(ELEMENT.moltenIron);
  const steel = api.elements.getTypeById(ELEMENT.steel);

  api.hooks.intercept(
    "element:update",
    (args, context) => {
      const x = args.x;
      const y = args.y;
      if (typeof x !== "number" || typeof y !== "number") return;
      if (api.elements.getTypeAtCell(x, y) !== coal) return;

      const ironCells: { x: number; y: number }[] = [];
      for (const [dx, dy] of NEIGHBOR_OFFSETS) {
        const nx = x + dx;
        const ny = y + dy;
        if (api.elements.getTypeAtCell(nx, ny) === moltenIron) {
          ironCells.push({ x: nx, y: ny });
          if (ironCells.length >= 2) break;
        }
      }
      if (ironCells.length < 2) return;

      api.elements.removeAtCell(ironCells[0].x, ironCells[0].y);
      api.elements.removeAtCell(ironCells[1].x, ironCells[1].y);
      api.elements.replaceAtCell(x, y, steel, { isFreeFalling: false });
      context.cancel();
    },
    { guard: { elementType: coal } },
  );
}
