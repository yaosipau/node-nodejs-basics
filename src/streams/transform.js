import process from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reversed = new Transform({
        transform(chunk, encoding, callback) {
            callback(null,chunk.reverse());
        }
    })
    process.stdin.pipe(reversed).pipe(process.stdout);
};

await transform();