const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
    // console.log('REQ URL is ', req.url);

    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    console.log('Estás accediendo a la ruta ', parsedUrl.pathname);

    res.writeHead(200);
    res.write('¡Qué pasa peña!');
    res.end();
});

app.listen(3000);

console.log('Mi server está tirando en el localhost:3000');