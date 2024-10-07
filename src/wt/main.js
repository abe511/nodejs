import { Worker } from "worker_threads";
import { availableParallelism } from "node:os";
import path from "node:path";
import {fileURLToPath} from "node:url";


const performCalculations = async () => {
    const cores = availableParallelism();
    // const result = [];
    const promises = [];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const workerFilename = path.join(__dirname, "./worker.js");

    for(let i = 0; i < cores; ++i) {
        const worker = new Worker(workerFilename, {workerData: i + 10});
        const promise = new Promise((resolve, _) => {
            worker.on("message", (data) => {
                return resolve({status: "resolved", data: data});
            }).on("error", () => {
                return resolve({status: "error", data: null});
            });
        });
        promises.push(promise);
    }

    const results = await Promise.all(promises);

    for(let result of results) {
        console.log(result);
    }

};
    
await performCalculations();