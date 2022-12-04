import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const cores = cpus();
    const promiseArray = [];
    const calculatedArray = [];
    const promise = (index) => new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: index + 10,
        });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
    const result = (index, status, data) => calculatedArray[index] = { status, data };

    cores.forEach((item, index) => {
        promiseArray.push(promise(index)
            .then(value => {
                result(index, 'resolved', value);
            }).catch(() => {
                result(index, 'error', null);
            })
        )
    });

    await Promise.all(promiseArray).then(()=>{
        console.log(calculatedArray)
    });
};

await performCalculations();