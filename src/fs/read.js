import {readFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath = path.join(__dirname, "files", "fileToRead.txt");
    try {
        const file = await readFile(filepath);
        console.log(file.toString());
    } catch(err) {
        throw new Error("FS operation failed");
    }
};

await read();