const http = require('http');
const { getHtml, getText, getComments, handleNotFound, postComments, getHome } = require('./handlers');

const PORT = 5002;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHtml(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComments(req, res);
    }

    handleNotFound(req, res);
    
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server was launched on port ${PORT}`);
})