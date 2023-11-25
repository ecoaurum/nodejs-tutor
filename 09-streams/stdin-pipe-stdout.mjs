import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
    transform: function(chunk, encoding, cb) {
        const upperCasd = chunk.toString().toUpperCase();
        cb(null, upperCasd);
    }
});

const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
        const reversed = chunk.toString().split('').reverse().join('');
        cb(null, reversed);
    }
})

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout)