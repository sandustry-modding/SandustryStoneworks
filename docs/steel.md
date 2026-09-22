# Steel line

Iron and coal from the gravel shaker feed a short **steel** factory.
Vanilla machines: **Kinetic Press** and **Smelter**.
Steel finish is a **neighbor rule** on the worker (not a contact recipe).
No vanilla gold / copper / sand in this loop.

Smelting alone makes **molten iron**.
**Coal** surrounded by **two molten iron** neighbors becomes **steel** in one step.

**Net recipe:** 2 molten iron + 1 coal → 1 steel (no middle product).

## Step 1 (shipped)

| Step | Machine / rule | In → Out |
| --- | --- | --- |
| 0 (hub) | Drill / laser + Shaker | Stone → Gravel → **Iron Ore** (down) + **Coal** (down) |
| 1a | Kinetic Press | **Iron Ore** → **Crushed Iron** |
| 1b | Smelter (needs heat) | **Crushed Iron** → **Molten Iron** |
| 1c | Neighbor rule | **Coal** with **2 molten iron** neighbors → **Steel** (consumes coal + both irons) |

**Steel** is the usable product for now (no further sink yet).

### Full loop

```mermaid
flowchart TD
  stone[Stone terrain] -->|drill / laser| gravel[Gravel]
  gravel -->|Shaker| crushedStone[Crushed Stone up]
  gravel -->|Shaker| ironOre[Iron Ore down]
  gravel -->|Shaker| coal[Coal down]

  ironOre -->|Kinetic Press| crushedIron[Crushed Iron]
  crushedIron -->|Smelter + heat| moltenIron[Molten Iron]
  moltenIron -->|2 neighbors of coal| steel[Steel]
  coal -->|center cell| steel

  crushedStone -.->|later| unused[Unused in step 1]
```

### Neighbor finish

```mermaid
flowchart LR
  MI1[Molten Iron] --- C[Coal]
  MI2[Molten Iron] --- C
  C -->|one step| ST[Steel]
```

Coal must have **at least two** molten-iron cells in its 8-neighborhood.
Those two irons and the coal are removed; **Steel** appears where the coal was.

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
    MI[Molten Iron]
  end

  subgraph finish [Finish pool]
    ST[Steel]
  end

  IO --> KP --> CI --> SM --> MI
  MI --> ST
  C --> ST
```

### Player sequence

```mermaid
sequenceDiagram
  participant P as Player factory
  participant Sh as Shaker
  participant Pr as Kinetic Press
  participant Sm as Smelter
  participant W as Worker rule

  P->>Sh: Belt gravel
  Sh-->>P: Iron Ore below
  Sh-->>P: Coal below
  P->>Pr: Drop Iron Ore with speed
  Pr-->>P: Crushed Iron
  P->>Sm: Crushed Iron on smelter + heat
  Sm-->>P: Molten Iron
  P->>W: Pool two molten iron against one coal
  W-->>P: Steel
```

## Why this shape

- **Press** matches Ex Nihilo “hammer ore → crushed.”
- **Smelter** melts iron only — no steel without carbon.
- **2 molten iron neighbors on coal** is one conversion, no pig-iron middle step, and forces pooling.
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
| Quench with water | Cool molten iron without making steel |

## Element quick ref

| Element | Matter | Role |
| --- | --- | --- |
| Iron Ore | Solid (heavy) | Shaker down |
| Coal | Slushy (heavy) | Shaker down; needs 2 molten iron neighbors |
| Crushed Iron | Solid | Press product; smelter feed |
| Molten Iron | Liquid | Smelter product; two neighbors of coal |
| Steel | Solid (heavy) | Step 1 end product |
