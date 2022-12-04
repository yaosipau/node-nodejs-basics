import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const pathToFile = './files/fileToRead.txt';
    const error = 'FS operation failed';
    const isExist = existsSync(pathToFile);

    if (!isExist) {
        throw Error(error)
    } else {
        const contents = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);
    }    
};

await read();