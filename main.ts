import { isEnabled } from "@modkit/utils";
import { register as registerGravel } from "./elements/stone/gravel/register.ts";
import { register as registerCrushedStone } from "./elements/stone/crushed-stone/register.ts";
import { register as registerIronOre } from "./elements/iron/iron-ore/register.ts";
import { register as registerCoal } from "./elements/coal/coal/register.ts";
import { register as registerCrushedIron } from "./elements/iron/crushed-iron/register.ts";
import { register as registerMoltenIron } from "./elements/iron/molten-iron/register.ts";
import { register as registerIron } from "./elements/iron/iron/register.ts";
import { register as registerSteel } from "./elements/steel/steel/register.ts";
import { register as registerSteelRecipes } from "./elements/steel/steel/recipes.ts";

if (isEnabled()) {
  registerGravel();
  registerCrushedStone();
  registerIronOre();
  registerCoal();
  registerCrushedIron();
  registerIron();
  registerMoltenIron();
  registerSteel();
  registerSteelRecipes();
}
