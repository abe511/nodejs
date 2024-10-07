import { unlink } from "fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filename = path.join(__dirname, "files", "fileToRemove.txt");
    try {
        await unlink(filename);
    } catch(err) {
        throw new Error("FS operation failed");
    }
};

await remove();

