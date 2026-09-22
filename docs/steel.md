# Steel line

Iron and coal from the gravel shaker feed a short **steel** factory.
Vanilla machines only: **Kinetic Press**, **Smelter**, and element **contact**.
No vanilla gold / copper / sand in this loop.

## Step 1 (shipped)

| Step | Machine / rule | In → Out |
| --- | --- | --- |
| 0 (hub) | Drill / laser + Shaker | Stone → Gravel → **Iron Ore** (down) + **Coal** (down) |
| 1a | Kinetic Press | **Iron Ore** → **Crushed Iron** |
| 1b | Smelter (needs heat) | **Crushed Iron** → **Molten Steel** |
| 1c | Contact | **Molten Steel** + **Coal** → **Steel** + (coal consumed) |

**Steel** is the usable product for now (no further sink yet).

### Full loop

```mermaid
flowchart TD
  stone[Stone terrain] -->|drill / laser| gravel[Gravel]
  gravel -->|Shaker| crushedStone[Crushed Stone up]
  gravel -->|Shaker| ironOre[Iron Ore down]
  gravel -->|Shaker| coal[Coal down]

  ironOre -->|Kinetic Press| crushedIron[Crushed Iron]
  crushedIron -->|Smelter + heat| molten[Molten Steel]
  molten -->|contact| steel[Steel]
  coal -->|contact with molten| steel

  crushedStone -.->|later| unused[Unused in step 1]
```

### Step 1 factory street

```mermaid
flowchart LR
  subgraph feed [Feed]
    IO[Iron Ore]
    C[Coal]
  end

  subgraph pressBay [Press]
    KP[Kinetic Press]
    CI[Crushed Iron]
  end

  subgraph heatBay [Heat]
    SM[Smelter]
    MS[Molten Steel]
  end

  subgraph finish [Finish]
    ST[Steel]
  end

  IO --> KP --> CI --> SM --> MS
  MS --> ST
  C --> ST
```

### Player sequence

```mermaid
sequenceDiagram
  participant P as Player factory
  participant Sh as Shaker
  participant Pr as Kinetic Press
  participant Sm as Smelter
  participant Ct as Contact

  P->>Sh: Belt gravel
  Sh-->>P: Iron Ore below
  Sh-->>P: Coal below
  P->>Pr: Drop Iron Ore with speed
  Pr-->>P: Crushed Iron
  P->>Sm: Crushed Iron on smelter + lava/relay heat
  Sm-->>P: Molten Steel
  P->>Ct: Molten Steel touches Coal
  Ct-->>P: Steel
```

## Why this shape

- **Press** matches Ex Nihilo “hammer ore → crushed.”
- **Smelter** matches “melt for metal” and reuses vanilla heat rules (relay / lava).
- **Coal finishes molten → steel** so both shaker downs matter in step 1.
- **Crushed Stone** stays out of the steel line for now (see [`ideas.md`](ideas.md)).

## Later (not step 1)

```mermaid
flowchart TD
  steel[Steel] --> blocks[Steel blocks / structures]
  steel --> parts[Machine parts / gates]
  coal2[Coal] --> fuel[Smelter fuel / heat]
  crushedIron[Crushed Iron] --> dust[Iron Dust wash tier]
```

| Idea | Notes |
| --- | --- |
| Steel blocks | Compress / build sink |
| Coal as heat | Replace or assist lava under smelter |
| Iron dust | Extra press / wash before smelt |
| Quench with water | Alternate finish instead of coal |

## Element quick ref

| Element | Matter | Role |
| --- | --- | --- |
| Iron Ore | Powder | Shaker down |
| Coal | Powder | Shaker down; finishes molten → steel |
| Crushed Iron | Powder | Press product; smelter feed |
| Molten Steel | Liquid | Smelter product |
| Steel | Powder | Step 1 end product |
