import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import path from "node:path";
import {fileURLToPath} from "node:url";


const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filepath = path.join(__dirname, "files");
    const gunzip = createGunzip();
    const rs = createReadStream(`${filepath}/archive.gz`);
    const ws = createWriteStream(`${filepath}/fileToCompress.txt`);

    rs.pipe(gunzip).pipe(ws);

};

await decompress();