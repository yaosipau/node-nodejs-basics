import process from 'node:process';

const parseArgs = () => {
    const args = process.argv.slice(2);
    const len = args.length;
    for (let i = 0; i < len ; i++) {
        if(args[i].startsWith('--')) {
            console.log(`${args[i].slice(2)} is ${args[i+1]}`);
        }
    }
};

parseArgs();