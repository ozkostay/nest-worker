// import { parentPort } from "worker_threads";
const { parentPort } = require('node:worker_threads');

parentPort.on('message', (message) => {
  const count = 15000000000;

  console.log(`Worker thread received message: ${message}`);
    let j = 0;
    for (let i = 0; i < count; i++ ) {
      j += i;
    }
    console.log('J', j);

  parentPort.postMessage(`Worker thread received message: ${message} FROM WORKER ${new Date()}`);

});