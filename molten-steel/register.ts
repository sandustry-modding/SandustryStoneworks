import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register molten steel (smelter product from crushed iron). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.moltenSteel]: "Molten Steel",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.moltenSteel,
    nameKey: NAME_KEY.moltenSteel,
    density: 220,
    matterType: sandkit.enums.MatterType.Liquid,
    metaColor: 0xff6a20,
    colors: {
      variants: [
        [255, 106, 32],
        [255, 140, 40],
        [220, 80, 20],
        [255, 180, 60],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
