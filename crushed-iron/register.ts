import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register crushed iron (press product from iron ore). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.crushedIron]: "Crushed Iron",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.crushedIron,
    nameKey: NAME_KEY.crushedIron,
    density: 240,
    matterType: sandkit.enums.MatterType.Powder,
    metaColor: 0x7a4030,
    colors: {
      variants: [
        [122, 64, 48],
        [98, 50, 38],
        [148, 78, 58],
        [80, 40, 32],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
