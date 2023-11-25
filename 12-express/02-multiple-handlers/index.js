const express = require('express');
const app = express();

const firstHandler = (req, res, next) => {
console.log('First Handler');
next();
}
    
const secondtHandler = (req, res) => res.send('Response from Express');

app.get('/', firstHandler, secondtHandler);

app.listen(5000, console.log('Server runnin on port 5000'));
