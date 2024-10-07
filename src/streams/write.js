import { createWriteStream } from "fs";
import path from "path";
import {fileURLToPath} from "node:url";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filename = path.join(__dirname, "files", "fileToWrite.txt");
    const ws = new createWriteStream(filename, "utf-8");

    process.stdin.on("data", (data) => {
        ws.write(data);
    });

};

await write();