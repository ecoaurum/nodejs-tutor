import EventEmitter from 'events'

const myEmitter = new EventEmitter();

const timeOutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
}

myEmitter.on('timeout', timeOutListenerFn);

console.log('Start');

setTimeout(() => myEmitter.emit('timeout', 2), 2000);
setTimeout(() => myEmitter.emit('timeout', 3), 3000);

myEmitter.once('singleEvent', () => {
    console.log('Single event');
})

setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 3000);

setTimeout(() => myEmitter.off('timeout', timeOutListenerFn), 4000);
setTimeout(() => myEmitter.emit('timeout', 5), 5000);


