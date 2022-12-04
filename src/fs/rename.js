import { existsSync } from 'node:fs';
import { rename as fsRename } from 'node:fs/promises';

const rename = async () => {
    const srcFile = './files/wrongFilename.txt'
    const destFile = './files/properFilename.md';
    const error = 'FS operation failed';
    const isExistSrc = existsSync(srcFile);
    const isExistDest = existsSync(destFile);

    if (!isExistSrc || isExistDest) {
        throw Error(error)
    } else {
        await fsRename(srcFile, destFile);
    }
};

await rename();