# Stone Gravel (tmp)

Temporary stone refining line for Sandustry.
Vanilla **Stone** has no dig output.
This mod drops **Gravel** when stone is drilled or lasered.

## Status

Experiment / `tmp` id.
Design notes live in [`ideas.md`](ideas.md).

## Current behavior (v0)

- Registers **Gravel** (mod powder, grabbable, belt-friendly).
- Sets Stone excavation `output` to gravel at chance `1`.
- Laser already digs with `fromDrill`, so drill and laser both drop gravel.

## Options

- **Mod enabled** — turn stone gravel drops off without unsubscribing.

## Folder layout

| Path | Role |
| --- | --- |
| `main.ts` | Thin entry; calls feature registers when enabled |
| `modinfo.ts` | Manifest and config schema |
| `shared/` | Element ids and i18n keys |
| `gravel/` | Gravel element + Stone dig output |
| `ideas.md` | Design notes for the refining line |

Later stages (shaker recipes, crush, wash, sinks) get their own feature folders.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
