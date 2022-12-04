import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const srcDir = './files'
    const error = 'FS operation failed';
    const isExistSrc = existsSync(srcDir);

    if (!isExistSrc) {
        throw Error(error)
    } else {
        const files = await readdir(srcDir);
        for (const file of files) {
            console.log(file);
        }
    } 
};

await list();