import { ELEMENT, NAME_KEY } from "../../../shared/ids.ts";

const api = sandkit.api;

/** Register iron (solid metal from cooled molten iron). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.iron]: "Iron",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.iron,
    nameKey: NAME_KEY.iron,
    density: 300,
    matterType: sandkit.enums.MatterType.Solid,
    metaColor: 0x7a6a5c,
    colors: {
      variants: [
        [122, 106, 92],
        [98, 86, 74],
        [148, 128, 110],
        [80, 70, 62],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
