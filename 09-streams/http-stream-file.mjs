import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const filePath = './09-streams/files/index.html';
    // With stream
    if (req.url === '/' && req.method === "GET") {
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res)
    };
    // Without streams. We read entire file and then send it to the client
    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file server');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data); 
            }
        })
    }
});

server.listen(3001, () => {
    console.log('Server listening on port 5003');
})