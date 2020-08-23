const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.write('que pasa peña!');
    res.end();
}).listen(3000);

console.log('Mi server esta tirando en el localhost:3000');