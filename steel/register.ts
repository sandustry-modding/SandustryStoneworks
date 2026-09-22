import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register steel (heavy solid; step 1 end product). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.steel]: "Steel",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.steel,
    nameKey: NAME_KEY.steel,
    density: 280,
    matterType: sandkit.enums.MatterType.Solid,
    metaColor: 0x8a949e,
    colors: {
      variants: [
        [138, 148, 158],
        [110, 120, 130],
        [160, 170, 180],
        [90, 98, 108],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
