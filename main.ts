import { isEnabled } from "@modkit/utils";
import { register as registerGravel } from "./gravel/register.ts";
import { register as registerCrushedStone } from "./crushed-stone/register.ts";
import { register as registerIronOre } from "./iron-ore/register.ts";
import { register as registerCoal } from "./coal/register.ts";
import { register as registerCrushedIron } from "./crushed-iron/register.ts";
import { register as registerMoltenIron } from "./molten-iron/register.ts";
import { register as registerSteel } from "./steel/register.ts";
import { register as registerSteelRecipes } from "./steel/recipes.ts";

if (isEnabled()) {
  registerGravel();
  registerCrushedStone();
  registerIronOre();
  registerCoal();
  registerCrushedIron();
  registerMoltenIron();
  registerSteel();
  registerSteelRecipes();
  sandkit.api.ui.toast("Stoneworks — steel: coal needs 2 molten iron neighbors", {});
}
