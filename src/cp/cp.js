import { fork } from "child_process";
import path from "node:path";
import {fileURLToPath} from "node:url";


const spawnChildProcess = async (args) => {
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filename = path.join(__dirname, "files", "script.js");
    const cp = fork(filename, args);

    cp.on("message", (chunk) => {
        process.stdout.write(`Received from child process: ${chunk.toString()}\n`)
    });

    cp.on("close", (chunk) => {
        process.stdout.write(`Process closed: ${chunk.toString()}\n`)
    });
};

spawnChildProcess(process.argv);