import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register molten iron (smelter product from crushed iron). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.moltenIron]: "Molten Iron",
  });

  const definition = {
    id: ELEMENT.moltenIron,
    nameKey: NAME_KEY.moltenIron,
    density: 220,
    matterType: sandkit.enums.MatterType.Liquid,
    // Same pulse as lava (seconds). The worker may spawn fire, then cool to Iron.
    duration: 0.28,
    defaultDataFields: { field2: 8 },
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
  };
  const { elementType } = api.elements.register(definition);

  api.discoveries.addElementByType(elementType);
}
