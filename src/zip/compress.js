import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const readFileSrc = './files/fileToCompress.txt';
    const zipFileSrc = './files/archive.txt.gz';

    const gzip = createGzip();
    const readStream = createReadStream(readFileSrc);
    const writeStream = createWriteStream(zipFileSrc);

    readStream.pipe(gzip).pipe(writeStream)
};

await compress();