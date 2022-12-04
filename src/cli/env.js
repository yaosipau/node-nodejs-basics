import process from 'node:process';

const parseEnv = () => {
    const envVars = process.env;
    const addToVar = 'RSS_';

    for (const key in envVars) {
        console.log(`${addToVar}${key}=${envVars[key]}`);
    }
};

parseEnv();

