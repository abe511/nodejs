import {writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";


const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath = path.join(__dirname, "files", "fresh.txt");
    const data = "I am fresh and young";

    try{
        writeFile(filepath, data, {flag: "wx"});
    }catch(error) {
        if(error.code === "EEXIST") {
            throw new Error("FS operation failed");
        }
        throw new Error();
    }
};

await create();