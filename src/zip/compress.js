import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import path from "node:path";
import {fileURLToPath} from "node:url";


const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath = path.join(__dirname, "files");
    const gzip = createGzip();
    const rs = createReadStream(`${filepath}/fileToCompress.txt`, "utf-8");
    const ws = createWriteStream(`${filepath}/archive.gz`);
    rs.pipe(gzip).pipe(ws);
};

await compress();