import { isEnabled } from "@modkit/utils";
import { register as registerGravel } from "./gravel/register.ts";

if (isEnabled()) {
  registerGravel();
  sandkit.api.ui.toast("Stone Gravel (tmp) — drill or laser stone for gravel", {});
}
