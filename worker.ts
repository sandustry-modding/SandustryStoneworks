import { registerWorker as registerMoltenIronWorker } from "./elements/iron/molten-iron/worker.ts";
import { registerWorker as registerShakerWorker } from "./shaker/worker.ts";
import { registerWorker as registerSteelWorker } from "./elements/steel/steel/worker.ts";

registerShakerWorker();
registerMoltenIronWorker();
registerSteelWorker();
