import fs from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const src = path.join(__dirname, "files", "wrongFilename.txt");
    const dest = path.join(__dirname, "files", "properFilename.md");

    try {
        await fs.rename(src, dest);
    } catch(err) {
        throw new Error("FS operation failed");
    }

};

await rename();