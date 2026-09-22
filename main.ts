import { isEnabled } from "@modkit/utils";
import { register as registerGravel } from "./gravel/register.ts";
import { register as registerCrushedStone } from "./crushed-stone/register.ts";
import { register as registerIronOre } from "./iron-ore/register.ts";
import { register as registerCoal } from "./coal/register.ts";

if (isEnabled()) {
  registerGravel();
  registerCrushedStone();
  registerIronOre();
  registerCoal();
  sandkit.api.ui.toast("Stoneworks — shake gravel → crushed stone / iron / coal", {});
}
