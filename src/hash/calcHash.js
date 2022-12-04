import { createHash } from 'node:crypto';
import { ReadStream } from 'node:fs';


const calculateHash = async () => {
    const file = 'files/fileToCalculateHashFor.txt';
    const alg = 'sha256';
    const hash = createHash(alg);
    const stream = ReadStream(file);

    stream.on('data', function(data) {
        hash.update(data);
    });
    stream.on('end', function() {
        const data = hash.digest('hex');
        console.log(data + '  ' + file);
    });
};

await calculateHash();