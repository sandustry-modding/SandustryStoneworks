import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register iron ore (heavy solid; shaker down). */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.ironOre]: "Iron Ore",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.ironOre,
    nameKey: NAME_KEY.ironOre,
    density: 350,
    matterType: sandkit.enums.MatterType.Solid,
    metaColor: 0xba8873,
    colors: {
      // Clay terracotta from #a78787 with more chroma
      variants: [
        [186, 136, 115],
        [164, 116, 98],
        [132, 92, 78],
        [204, 154, 132],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);
}
