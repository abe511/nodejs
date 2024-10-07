import { Transform } from "stream";

const transform = async () => {
    const ts = new Transform({
        transform(chunk, enc, cb) {
            cb(null, chunk.toString().split("").reverse().join(""));
        }
    });

    process.stdin.pipe(ts).pipe(process.stdout);
};

await transform();