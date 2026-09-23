import { registerWorker as registerMoltenIronWorker } from "./molten-iron/worker.ts";
import { registerWorker as registerShakerWorker } from "./shaker/worker.ts";
import { registerWorker as registerSteelWorker } from "./steel/worker.ts";

registerShakerWorker();
registerMoltenIronWorker();
registerSteelWorker();
