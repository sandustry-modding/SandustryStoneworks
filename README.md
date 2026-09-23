# Stoneworks

Stone refining for Sandustry.
Vanilla **Stone** has no dig output.
This mod drops **Gravel** when stone is drilled or lasered.
Belt gravel onto a **Shaker**, then run a short **steel** line.

Steel loop details and diagrams: [`docs/steel.md`](docs/steel.md).

## Status

Early experiment.
Design notes live in [`docs/ideas.md`](docs/ideas.md).

## Current behavior (v0.0.5)

- Registers **Gravel** (mod **slushy**, like wet sand — grabbable, belt-friendly).
- Sets Stone excavation `output` to gravel at chance `1`.
- Laser already digs with `fromDrill`, so drill and laser both drop gravel.
- Shaker (vanilla): gravel becomes **exactly one** of:
  - **Crushed Stone** — stays on the shaker (up)
  - **Iron Ore** / **Coal** — eject below (even odds with crushed stone)
  - Crushed Stone density **120** (lighter than gravel **150**)
- Steel line (step 1):
  - **Smelter:** Iron Ore → **Molten Iron** (needs heat)
  - **Residue:** one light cell on top of a fresh melt (on the pool surface if molten iron already covers the smelter)
  - **Cool:** Molten Iron becomes **Iron** after a short time away from heat (smelter / lava / fire), or instantly when it touches **Water** (water → steam)
  - **Remelt:** Smelter melts **Iron** back into **Molten Iron**
  - **Neighbor rule:** Coal with **2 molten iron** neighbors → **Steel** (consumes coal + both irons)

## Options

- **Mod enabled** — turn Stoneworks off without unsubscribing.

## Folder layout

| Path | Role |
| --- | --- |
| `main.ts` | Thin entry; calls feature registers when enabled |
| `modinfo.ts` | Manifest and config schema |
| `shared/` | Element ids and i18n keys |
| `elements/stone/gravel/` | Gravel element + Stone dig output |
| `elements/stone/crushed-stone/` | Crushed Stone element |
| `elements/iron/iron-ore/` | Iron Ore element |
| `elements/iron/crushed-iron/` | Crushed Iron element |
| `elements/iron/molten-iron/` | Molten Iron element |
| `elements/iron/iron/` | Iron element (cooled molten) |
| `elements/coal/coal/` | Coal element |
| `elements/steel/steel/` | Steel element + step 1 recipes |
| `docs/` | Design notes (`ideas.md`, `steel.md`) |
| `shaker/` | Worker: exclusive even pick on gravel |
| `worker.ts` | Worker entry |

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
