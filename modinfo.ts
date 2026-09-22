import { defineModInfo } from "@modkit/modinfo";

export const modinfo = defineModInfo({
  manifestVersion: 1,
  id: "irishbruse.tmp-stone-gravel",
  name: "Stone Gravel (tmp)",
  version: "0.0.2",
  apiVersion: 1,
  gameVersion: { minimum: "0.5.5" },
  entry: "main.js",
  workerEntry: "worker.js",
  author: "IrishBruse",
  description:
    "Temporary: stone drops gravel; shake into crushed stone, iron ore, or coal.",
  dependencies: [],
  loadOrder: 0,
  configSchema: {
    enabled: {
      type: "boolean",
      default: true,
      labelKey: "Mod enabled",
      descriptionKey: "Turn the mod off without unsubscribing.",
    },
  },
});
