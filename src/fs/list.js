import { readdir } from "fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const srcDir = path.join(__dirname, "files");
    let filenames = [];

    try {
        filenames = await readdir(srcDir);
        filenames.forEach((el) => console.log(el));
    } catch(err) {
        throw new Error("FS operation failed");
    }
};

await list();