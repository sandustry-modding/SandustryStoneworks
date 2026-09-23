import { ELEMENT } from "../shared/ids.ts";

/** Lava duration in seconds, and the empty-neighbor fire chance on each pulse. */
const PULSE_SECONDS = 0.28;
const FIRE_CHANCE = 0.01;
/** Pulses without heat before molten iron becomes solid Iron (~2s). */
const HEAT_PULSES = 8;
const HEAT_FIELD = 2;

const CARDINAL: ReadonlyArray<readonly [number, number]> = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

type UpdateArgs = {
  x: number;
  y: number;
  elementIndex: number;
  elementData: { hasDuration: { [index: number]: number } };
};

type ExpireArgs = {
  x: number;
  y: number;
};

/**
 * Lava pulse: every ~0.28s, each empty cardinal neighbor has a 1% chance
 * to become Fire (temperature 1200).
 * Heat (smelter below, lava, or fire) keeps the cell molten.
 * Without heat, it solidifies into Iron after a few pulses.
 */
export function registerWorker(): void {
  const api = sandkit.api as unknown as WorkerSandkitApi;
  const moltenIron = api.elements.getTypeById(ELEMENT.moltenIron);
  const iron = api.elements.getTypeById(ELEMENT.iron);
  const fire = api.elements.getTypeById("fire");
  const lava = api.elements.getTypeById("lava");
  const smelter = api.structures.getTypeById("smelter");
  const guard = { guard: { elementType: moltenIron } };

  function isHeated(x: number, y: number): boolean {
    const below = api.structures.getAtCell(x, y + 1);
    if (below && below.type === smelter) return true;
    for (const [dx, dy] of CARDINAL) {
      const neighbor = api.elements.getTypeAtCell(x + dx, y + dy);
      if (neighbor === lava || neighbor === fire) return true;
    }
    return false;
  }

  function emitFire(x: number, y: number): void {
    for (const [dx, dy] of CARDINAL) {
      const nx = x + dx;
      const ny = y + dy;
      if (!api.grid.isCellEmptyAtCell(nx, ny)) continue;
      if (Math.random() >= FIRE_CHANCE) continue;
      api.elements.createAtCell(nx, ny, fire, {
        data: { temperature: 1200 },
      });
    }
  }

  function keepMolten(x: number, y: number): void {
    const span = PULSE_SECONDS * (0.5 + Math.random());
    api.elements.setDurationAtCell(x, y, span);
  }

  api.hooks.intercept(
    "element:update",
    (rawArgs) => {
      const args = rawArgs as UpdateArgs;
      const index = args.elementIndex;
      if (args.elementData.hasDuration[index] === 1) return;
      api.elements.setDurationAtCell(args.x, args.y, PULSE_SECONDS, { updateMax: true });
    },
    guard,
  );

  const residue = api.elements.getTypeById("residue");
  const SIDE_SEARCH: ReadonlyArray<number> = [-1, 1, -2, 2];
  const RESIDUE_SEARCH_UP = 24;

  /** First empty cell above this melt, then empty cells beside the column. */
  function findResidueCell(x: number, y: number): { x: number; y: number } | null {
    for (let dy = 1; dy <= RESIDUE_SEARCH_UP; dy++) {
      const cy = y - dy;
      if (api.grid.isCellEmptyAtCell(x, cy)) return { x, y: cy };
    }
    for (let dy = 1; dy <= RESIDUE_SEARCH_UP; dy++) {
      const cy = y - dy;
      for (const dx of SIDE_SEARCH) {
        const cx = x + dx;
        if (api.grid.isCellEmptyAtCell(cx, cy)) return { x: cx, y: cy };
      }
    }
    return null;
  }

  api.hooks.intercept(
    "element:update",
    (rawArgs) => {
      const args = rawArgs as UpdateArgs;
      if (api.elements.getDataFieldAtCell(args.x, args.y, 1) === 1) return;

      const below = api.structures.getAtCell(args.x, args.y + 1);
      if (!below || below.type !== smelter) return;

      const dest = findResidueCell(args.x, args.y);
      if (!dest) return;

      api.elements.createAtCell(dest.x, dest.y, residue);
      api.elements.setDataFieldAtCell(args.x, args.y, 1, 1);
    },
    guard,
  );

  api.hooks.intercept(
    "element:duration:expire",
    (rawArgs, context) => {
      const args = rawArgs as ExpireArgs;
      const x = args.x;
      const y = args.y;

      emitFire(x, y);

      if (isHeated(x, y)) {
        api.elements.setDataFieldAtCell(x, y, HEAT_FIELD, HEAT_PULSES);
        keepMolten(x, y);
        context.cancel();
        return;
      }

      const heat = api.elements.getDataFieldAtCell(x, y, HEAT_FIELD);
      if (heat > 1) {
        api.elements.setDataFieldAtCell(x, y, HEAT_FIELD, heat - 1);
        keepMolten(x, y);
        context.cancel();
        return;
      }

      api.elements.replaceAtCell(x, y, iron, { isFreeFalling: false });
      context.cancel();
    },
    guard,
  );
}
