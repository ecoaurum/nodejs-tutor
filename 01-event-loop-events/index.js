const fs = require('fs');

const dns = require('dns');

function timestamp() {
    return performance.now().toFixed(2)
}

console.log('Programming start...');

//Close events
fs.writeFile('./text.txt', 'Hello, Node JS', () => console.log('File written', timestamp()))

//Promoses
Promise.resolve().then(()=> console.log('Promise 1', timestamp()));

//NextTick
process.nextTick(() => console.log('Next Tick 1', timestamp()));

//setImmediate (check)
setImmediate(() => console.log('Immediate 1', timestamp()));

// TimeOut
setTimeout(() => {console.log('Timeout 1', timestamp())}, 0);
setTimeout(() => {
    process.nextTick(() => console.log('Next Tick 2', timestamp()))
    console.log('Timeout 2', timestamp())
}, 100);

//setInterval
let count = 1;
let interval = setInterval(() => {
    console.log(`Interval ${count += 1}`)
    if (count === 3) clearInterval(interval)
}, 50);

// i/o events
dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1 localhost', address, timestamp());
})

console.log('Programming end....');