import fs from "fs";
import path from "path";
import {fileURLToPath} from "node:url";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filename = path.join(__dirname, "files", "fileToRead.txt");
    const rs = fs.createReadStream(filename, "utf-8");

    rs.on("data", (data) => {
        process.stdout.write(data);
        process.stdout.write("\n");
    });
};

await read();