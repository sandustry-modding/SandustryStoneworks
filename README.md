# Stoneworks

Stone refining for Sandustry.
Vanilla **Stone** has no dig output.
This mod drops **Gravel** when stone is drilled or lasered.
Belt gravel onto a **Shaker** for crushed stone, iron ore, or coal.

## Status

Early experiment.

## Current behavior (v0.0.2)

- Registers **Gravel** (mod **slushy**, like wet sand — grabbable, belt-friendly).
- Sets Stone excavation `output` to gravel at chance `1`.
- Laser already digs with `fromDrill`, so drill and laser both drop gravel.
- Shaker (vanilla): gravel becomes **exactly one** of:
  - **Crushed Stone** — stays on the shaker (up)
  - **Iron Ore** / **Coal** — eject below (even odds with crushed stone)
  - Crushed Stone density **120** (lighter than gravel **150**)

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
| `shaker/` | Worker: exclusive even pick on gravel |
| `worker.ts` | Worker entry |

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
