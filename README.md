# Stoneworks

Stone refining for Sandustry.
Vanilla **Stone** has no dig output.
This mod drops **Gravel** when stone is drilled or lasered.
Belt gravel onto a **Shaker**, then run a short **steel** line.

Steel loop details and diagrams: [`docs/steel.md`](docs/steel.md).

## Status

Early experiment.
Design notes live in [`docs/ideas.md`](docs/ideas.md).

## Current behavior (v0.0.3)

- Registers **Gravel** (mod **slushy**, like wet sand — grabbable, belt-friendly).
- Sets Stone excavation `output` to gravel at chance `1`.
- Laser already digs with `fromDrill`, so drill and laser both drop gravel.
- Shaker (vanilla): gravel becomes **exactly one** of:
  - **Crushed Stone** — stays on the shaker (up)
  - **Iron Ore** / **Coal** — eject below (even odds with crushed stone)
  - Crushed Stone density **120** (lighter than gravel **150**)
- Steel line (step 1):
  - **Kinetic Press:** Iron Ore → **Crushed Iron**
  - **Smelter:** Crushed Iron → **Molten Iron** (needs heat)
  - **Neighbor rule:** Coal with **2 molten iron** neighbors → **Steel** (consumes coal + both irons)

## Options

- **Mod enabled** — turn Stoneworks off without unsubscribing.

## Folder layout

| Path | Role |
| --- | --- |
| `main.ts` | Thin entry; calls feature registers when enabled |
| `modinfo.ts` | Manifest and config schema |
| `shared/` | Element ids and i18n keys |
| `gravel/` | Gravel element + Stone dig output |
| `crushed-stone/` | Crushed Stone element |
| `iron-ore/` | Iron Ore element |
| `coal/` | Coal element |
| `crushed-iron/` | Crushed Iron element |
| `molten-iron/` | Molten Iron element |
| `steel/` | Steel element + step 1 recipes |
| `docs/` | Design notes (`ideas.md`, `steel.md`) |
| `shaker/` | Worker: exclusive even pick on gravel |
| `worker.ts` | Worker entry |

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
