import { ELEMENT, NAME_KEY } from "../shared/ids.ts";

const api = sandkit.api;

/** Register gravel and make vanilla Stone drop it on drill / laser dig. */
export function register(): void {
  api.i18n.register("en", {
    [NAME_KEY.gravel]: "Gravel",
  });

  const { elementType } = api.elements.register({
    id: ELEMENT.gravel,
    nameKey: NAME_KEY.gravel,
    density: 150,
    matterType: sandkit.enums.MatterType.Slushy,
    metaColor: 0x8a8680,
    colors: {
      variants: [
        [138, 134, 128],
        [120, 116, 110],
        [158, 154, 148],
        [100, 96, 90],
      ],
    },
    isGrabbable: true,
    isTransportable: true,
  });

  api.discoveries.addElementByType(elementType);

  // Laser excavates with fromDrill, so the drill output covers both tools.
  api.terrains.updateDefinition(sandkit.enums.CellType.Stone, {
    output: {
      elementType,
      chance: 1,
    },
  });
}
