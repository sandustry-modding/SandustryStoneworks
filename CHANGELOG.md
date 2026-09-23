# Changelog

## 0.0.5

- Fixed: **Residue** from a melt now sits on top of a molten pool, instead of skipping when the cell above is already full.

## 0.0.4

- Added: **Iron** — molten iron cools into this solid when it leaves heat, or when **Water** quenches it (water → steam).
- Added: **Smelter** remelts **Iron** back into **Molten Iron**.

## 0.0.3

- Added: Steel line step 1 — **Crushed Iron**, **Molten Iron**, **Steel**.
- Changed: **Smelter** melts **Iron Ore** into **Molten Iron** (no press step).
- Added: A fresh melt on the smelter leaves one vanilla **Residue** cell on top when that cell is empty.
- Added: Neighbor rule — coal with **2 molten iron** neighbors → steel (net **2 : 1**, no middle step).
- Added: [`docs/steel.md`](docs/steel.md) with mermaid gameplay loops.
- Changed: **Coal** is heavy **Slushy** (density 280).
- Changed: **Iron Ore**, **Crushed Iron**, and **Steel** use **Solid** matter (density 350 / 240 / 280) so they fall fast and stay heavy.
- Added: **Molten Iron** pulses like lava (0.28s) and can spawn **Fire** on an empty side (1% per side).

## 0.0.2

- Renamed mod to **Stoneworks** (`irishbruse.stoneworks`).
- Added: **Crushed Stone**, **Iron Ore**, and **Coal** powders.
- Added: Shaker — gravel becomes **one** of crushed stone (up) / iron ore or coal (down) at even odds.
- Changed: **Gravel** uses **Slushy** matter (wet-sand fall), not Powder.
- Changed: Iron Ore colors to hematite rust palette.
- Changed: **Crushed Stone** density **120** (lighter than gravel **150**).

## 0.0.1

- Added: **Gravel** powder from drilling or lasering vanilla **Stone**.
- Added: **Mod enabled** config to turn drops off without unsubscribing.
