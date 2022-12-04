import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const create = async () => {
    const path = './files/fresh.txt';
    const text = 'I am fresh and young';
    const error = 'FS operation failed';
    const isExist = existsSync(path);

    if (isExist) {
        throw Error(error)
    } else {
        await writeFile(path, text);
    }
};

await create();