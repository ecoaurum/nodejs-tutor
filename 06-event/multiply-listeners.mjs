import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('MyEvent', () => {
    console.log('First event listener');
});

myEmitter.on('MyEvent', () => {
    console.log('Second event Listener');
});

myEmitter.setMaxListeners(25);

console.log(myEmitter.getMaxListeners());

setTimeout(() => myEmitter.emit('MyEvent'), 2000);