const fs = require('fs');
const { resolve } = require('path');

let isRunning = true;

setTimeout(() => isRunning = false, 10);
process.nextTick(() => console.log('Next Tick'));

function setImediatePromise() {
    return new Promise((resolve, rejeect) => {
        setImmediate(() => resolve())
    })
};

async function whileoop() {
    while(isRunning) {
        console.log('While loop is isRunning...');
        await setImediatePromise()
    }
};

whileoop().then(() => console.log('WhileLoop ended'))
