import { existsSync } from 'node:fs';
import { cp } from 'node:fs/promises';

const copy = async () => {
    const srcDir = './files'
    const destDir = './files_copy';
    const error = 'FS operation failed';
    const isExistDest = existsSync(destDir);

    if (isExistDest) {
        throw Error(error)
    } else {
        await cp(srcDir, destDir, {recursive: true});
    }    
};

copy();