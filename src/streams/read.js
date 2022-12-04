import process from 'node:process';
import { createReadStream } from 'node:fs';

const read = async () => {
    const fileSrc = './files/fileToRead.txt';
    const stream = createReadStream(fileSrc);

    stream.on('data', (chunk) => {
        process.stdout.write(chunk.toString())
    });
};

await read();