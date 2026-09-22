# Stoneworks — ideas

Notes for `irishbruse.stoneworks`.
Vanilla **Stone** has no excavation output.
This mod drops **Gravel** when stone is drilled or lasered (laser already digs with `fromDrill`).

## What we are making

A **stone refining line** in the Skyblock / **Ex Nihilo** spirit: dig rock, shake it, get **ores and intermediates people already recognize**, then refine those into something this mod owns.

It is **not** another wet-sand gold farm.
Shakers, belts, presses, and smelters are borrowed tools.
Drops should read like **Crushed Iron**, **Coal**, **Flint**, **Clay** — not abstract “byproduct / concentrate.”

### What “byproduct + concentrate” meant (and why we drop those words)

Those were only **roles**:

| Old role word | Meant | Better framing |
| --- | --- | --- |
| Byproduct (up) | The common mass that comes out most shakes | A real bulk material (e.g. **Crushed Stone** or **Dirt**) |
| Concentrate (down) | The rare valuable cut | A real **ore / crushed ore** (e.g. **Crushed Iron**, **Coal**) |

Ex Nihilo does not say “concentrate.”
It says **gravel → sieve → iron ore / coal / flint / …**, then **hammer → crushed ore → dust → smelt**.

We want that readability inside Sandustry.

### Player fantasy

1. Drill or laser stone → **Gravel**.
2. Belt gravel into **Shakers**.
3. Most shakes spit a **common, recognizable bulk** (up).
4. Rare shakes spit a **recognizable ore or crushed ore** (down).
5. Later: crush / wash / smelt those ores into **mod end uses** (ingots, blocks, fuel, …) — still not vanilla gold / copper / sand as the payoff.

Vanilla has **no** Iron, Coal, Clay, Flint, Quartz elements today.
Those names are free and familiar.

### Chain a little ahead (Ex Nihilo-shaped)

```text
Stone (vanilla terrain)
  │  drill / laser
  ▼
Gravel                              ← like cobble→gravel              [v0]
  │  Shaker (sieve stand-in)
  ├─► Crushed Stone (common, up)    ← bulk / next crush feedstock     [v1]
  └─► Ore table (rare, down)        ← recognizable loot               [v1]
        e.g. Iron Ore, Coal, Flint, Clay, Quartz
        │
        │  crush / press (hammer stand-in)
        ▼
      Crushed Iron / …              ← Ex Nihilo “crushed ore”         [v2]
        │
        │  wash or further crush
        ▼
      Iron Dust / …                 ← optional purity step            [v2–v3]
        │
        │  smelt / press
        ▼
      Iron Ingot / block / part     ← real usable sink                [v3+]
```

| Stage | Familiar hook | In Sandustry |
| --- | --- | --- |
| Dig | Cobble gen / quarry | Drill & laser stone → Gravel |
| Sieve | Ex Nihilo mesh | Vanilla **Shaker** + mod recipe |
| Hammer | Crushed ores | Kinetic press (or similar) on ore → crushed |
| Wash / dust | Enrichment ladder | Optional water / second crush |
| Smelt | Ingots & blocks | Smelter / press → **usable** mod products |

### Example v1 shake table (names, not final chances)

| Direction | Example drop | Why people get it |
| --- | --- | --- |
| Above (common) | **Crushed Stone** | Obvious “I smashed rock” bulk |
| Below (rare) | **Iron Ore** | Classic sieve jackpot |
| Below (rare) | **Coal** | Fuel branch later |
| Below (rare) | **Flint** / **Clay** / **Quartz** | Utility / build / glass-adjacent branches |

Common out must still be a **named material**, not “trash.”
Rare outs should be things you would point at in JEI and recognize.

### What **Crushed Stone** is for

It is the **common** shaker out — high volume on purpose.
It must still have jobs, or players dump it into the void.

| Use | Fantasy | Why it works |
| --- | --- | --- |
| **Second sieve tier** | Shake Crushed Stone for a *different* loot table than Gravel | Classic Ex Nihilo (gravel vs sand vs dust meshes) |
| **Further crush** | Press → **Stone Dust** → own rare table / wash recipes | Extends the ladder without vanilla sand |
| **Concrete / mix** | Crushed Stone + water (or clay) → **Concrete** powder/blocks | Recognizable build sink; eats bulk |
| **Rebuild** | Compress / press → cobble-like block, bricks, or paving | Closes the loop: dig → process → build |
| **Fill / ballast** | Cheap fill for pits, walls, or machine pads | Early “I have too much” sink |
| **Filter media** | Beds inside washers that clog and need replacing | Turns surplus into a soft upkeep cost |
| **Heat cladding** | Line furnaces / insulating layers (mod recipe) | Industrial flavor; optional later |

**Lean recommendation (stack 2–3):**

1. **v1** — Crushed Stone is beltable bulk + **compress to build blocks** (instant recognition).
2. **v1–v2** — **Second shaker recipe** on Crushed Stone (different rares than Gravel).
3. **v2** — **Concrete** (Crushed Stone + water/clay) as the main mass sink.
4. Optional — press leftover into **Stone Dust** for a late sieve tier.

Avoid making Crushed Stone only “trash that becomes Iron sometimes.”
Ore is the lottery; Crushed Stone is the **industry**.

## Design lane

- Content + machines: chemistry-style processing, not a new dig tool.
- Skyblock modpack inspiration: gravel is a **processing hub**, not an end product.
- Reuse the **vanilla Shaker** instead of a custom sieve structure.
- **New gameplay line only** — do **not** feed back into vanilla **gold**, **copper**, **sand**, or other stock refine outputs.
- Vanilla machines (shaker, press, smelter, …) are fine as **hosts**.
- Outputs and intermediate powders/fluids should be **mod elements** with their own sink (build, fuel, ammo, gate, cosmetics, …).

## Hard rule

| Allowed | Not allowed |
| --- | --- |
| Dig stone → mod **Gravel** | Shake gravel → vanilla Gold |
| Shake / crush / wash → new elements | Crush gravel → vanilla Sand |
| Use shaker / press / belts as tools | Smelt line → vanilla Copper / Liquid Copper |
| Optional *side* contact with vanilla later, only if it does not replace this line’s sink | “Just another gold farm” |

## Shipped / committed direction

| Step | Behavior |
| --- | --- |
| Dig stone | Drill or laser → **Gravel** (mod powder) |
| Process gravel | Belt onto **Shaker** (vanilla machine, **mod recipe**) |

Register with `api.structures.recipes.register("shaker", …)` or `api.processing.registerShaker`.

Recipe shape:

- `input` — gravel (mod)
- `outputsAbove` — weighted ejects up (**mod** elements)
- `outputsBelow` — weighted ejects down (**mod** elements)

Keep the wet-sand *feel* (trash up, loot down).
Do not copy wet-sand *products*.

## Naming

**Player-facing:** Ex Nihilo style — Gravel, Crushed Stone, Iron Ore, Crushed Iron, Iron Dust, Coal, Flint, Clay, Quartz, …

**Rejected labels:** byproduct, concentrate, grit, fleck.

Vanilla already owns gold / copper / sand as the early refine story.
Iron / coal / clay / flint / quartz are **absent** as elements today — good recognizable adds.

### Name directions (if the iron set feels too Minecraft)

1. **Minecraft-familiar** — Iron, Coal, Flint, Clay, Quartz (recommended for recognition)
2. **Industrial aggregate** — Crushed Stone, Aggregate, Tailings, Clinker (weaker “ore” fantasy)
3. **Branded family** — made-up `*ite` ores (unique, less instantly readable)

## Shaker v1 options (all mod-only)

1. **`crushed-stone-up-ore-down`** — Crushed Stone above; rare Iron Ore (or small ore table) below. Recommended.
2. **`crushed-stone-up-loot-table`** — Crushed Stone above; below = Iron Ore / Coal / Flint / Clay / Quartz weights.
3. **`two-stone-grades`** — Coarse + fine crushed stone most of the time; rare ore below.

**Lean recommendation:** `crushed-stone-up-loot-table` so one shaker already feels like a sieve.

## Skyblock loops that fit (mod materials)

| Loop | Player fantasy | Factory shape |
| --- | --- | --- |
| Sieve (via Shaker) | Loot from trash | Parallel shakers + buffers |
| Hammer → crushed ore | Ex Nihilo crushed ores | Press street on ore → crushed |
| Dust → smelt | Ingot payoff | Wash/crush then smelter |
| Heat → glass/slag | Quartz / glass branch | Split after smelter |

### Other mechanic ideas

1. **Crush chain** — Ore → Crushed Ore → Dust (press). Classic Ex Nihilo ladder.
2. **Wash column** — Dust + water → cleaner dust + slurry waste.
3. **Barrel / soak** — Optional clay / special recipes in sealed vats.
4. **Heat branch** — Smelt crushed/dust → ingot or block; quartz → glass-like product.
5. **Filter bed** — Gravel or crushed stone as wear media in machines.
6. **Compression** — Ingots / crushed stone → build blocks.
7. **Gravity traps** — Dense powders as layout puzzles.

## End sinks (usable + recognizable)

Aim for things players already understand:

- **Iron Ingot** / iron blocks / machine parts
- **Coal** as fuel for heat machines
- **Clay** → bricks / seals
- **Flint** → tools or sparks
- **Quartz** → glass / clear builds / energy-flavored parts

Still not vanilla gold / copper / sand as the line’s reason to exist.

## Earlier factory pitches (broader)

Useful if this grows into a full plant (still mod I/O):

1. Crude → fractions (distill dirty fluid)
2. Ore slurry washing
3. Alloy heat windows
4. Catalyst beds (wear items)
5. Phase-change logistics (gas ↔ liquid ↔ powder)
6. Contamination / flush culture
7. Batch vs continuous cookers
8. Exothermic heat cascades
9. Signal-sorted recycling

## Open decisions

- [x] Drop vague “byproduct / concentrate” in favor of Ex Nihilo-style names
- [x] Common shake out = **Crushed Stone** (shipped; useless for now)
- [x] v1 rare table starts with **Iron Ore** + **Coal** (shipped; no refine yet)
- [ ] Crushed Stone sinks: build blocks / 2nd sieve / concrete (later)
- [ ] Add Flint / Clay / Quartz to the shaker table?
- [ ] First usable sink for ores (Iron Ingot block? Coal fuel?)
- [x] Permanent mod id / name: **Stoneworks** (`irishbruse.stoneworks`)
