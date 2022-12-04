import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const srcFile = './files/fileToRemove.txt'
    const error = 'FS operation failed';
    const isExistSrc = existsSync(srcFile);

    if (!isExistSrc) {
        throw Error(error)
    } else {
        await rm(srcFile);
    }
};

await remove();