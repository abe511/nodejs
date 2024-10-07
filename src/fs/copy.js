import { cp, readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const srcDir = path.join(__dirname, "files");
    const destDir = path.join(__dirname, "files_copy");

    try {
        await readdir(srcDir);
        await mkdir(destDir);
        await cp(srcDir, destDir, {recursive: true});
    } catch {
        throw new Error("FS operation failed");
    }
};

await copy();
