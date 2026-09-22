import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register coal powder (rare shaker out; no fuel use yet). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.coal]: "Coal",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.coal,
    nameKey: NAME_KEY.coal,
    density: 140,
    matterType: sandkit.enums.MatterType.Powder,
    metaColor: 0x2a2a2e,
    colors: {
      variants: [
        [42, 42, 46],
        [28, 28, 32],
        [58, 58, 62],
        [18, 18, 22],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
