import { defineModInfo } from "@modkit/modinfo";

export const modinfo = defineModInfo({
  manifestVersion: 1,
  id: "irishbruse.tmp-stone-gravel",
  name: "Stone Gravel (tmp)",
  version: "0.0.1",
  apiVersion: 1,
  gameVersion: { minimum: "0.5.5" },
  entry: "main.js",
  author: "IrishBruse",
  description: "Temporary: stone drops gravel when drilled or lasered.",
  dependencies: [],
  loadOrder: 0,
  configSchema: {
    enabled: {
      type: "boolean",
      default: true,
      labelKey: "Mod enabled",
      descriptionKey: "Turn stone gravel drops off without unsubscribing.",
    },
  },
});
