import process from 'node:process';
import { createWriteStream } from 'node:fs';

const write = async () => {
    const fileSrc = './files/fileToWrite.txt';
    const stream = createWriteStream(fileSrc);
    process.stdin.pipe(stream);
};

await write();