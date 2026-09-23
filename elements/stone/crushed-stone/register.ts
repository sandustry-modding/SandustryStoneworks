import { ELEMENT, NAME_KEY } from "../../../shared/ids.ts";

const api = sandkit.api;

/** Register crushed stone powder (common shaker out; no uses yet). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.crushedStone]: "Crushed Stone",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.crushedStone,
    nameKey: NAME_KEY.crushedStone,
    density: 120,
    matterType: sandkit.enums.MatterType.Powder,
    metaColor: 0xa8a49c,
    colors: {
      variants: [
        [168, 164, 156],
        [148, 144, 136],
        [188, 184, 176],
        [128, 124, 116],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
