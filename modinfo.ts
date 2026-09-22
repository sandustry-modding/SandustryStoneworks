import { defineModInfo } from "@modkit/modinfo";

export const modinfo = defineModInfo({
  manifestVersion: 1,
  id: "irishbruse.stoneworks",
  name: "Stoneworks",
  version: "0.0.3",
  apiVersion: 1,
  gameVersion: { minimum: "0.5.5" },
  entry: "main.js",
  workerEntry: "worker.js",
  author: "IrishBruse",
  description:
    "Drill stone for gravel. Shake into ores. Press and smelt a short steel line.",
  dependencies: [],
  loadOrder: 0,
  configSchema: {
    enabled: {
      type: "boolean",
      default: true,
      labelKey: "Mod enabled",
      descriptionKey: "Turn Stoneworks off without unsubscribing.",
    },
  },
});
