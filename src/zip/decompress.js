import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const readFileSrc = './files/uncompressed.txt';
    const zipFileSrc = './files/archive.txt.gz';

    const gzip = createUnzip();
    const readStream = createReadStream(zipFileSrc);
    const writeStream = createWriteStream(readFileSrc);

    readStream.pipe(gzip).pipe(writeStream);
};

await decompress();