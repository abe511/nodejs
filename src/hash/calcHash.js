import { createHash } from "crypto";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
    try {
        const file =  await readFile(filepath);
        const hash = createHash("sha256").update(file).digest("hex");
        console.log(hash);
    } catch(err) {
        throw new Error("Read error");
    }
};

await calculateHash();