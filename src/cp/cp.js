import { spawn } from 'node:child_process';
import process from 'node:process';


const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./files/script.js', ...args]);

    child.stdout.on('data', (data) => {
        console.log('out', data.toString());
    });

    process.stdin.pipe(child.stdin);
};

const args = process.argv.slice(2);

spawnChildProcess(args);