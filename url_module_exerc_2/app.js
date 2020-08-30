const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer((req, res) => {
    const requestedUrl = url.parse(req.url, true);
    // console.log(requestedUrl);

    const splittedUrl = requestedUrl.path.split('/');
    // console.log(splittedUrl);

    if(requestedUrl.path === '/') {
        res.writeHead(301);
        res.write('Esta no es la ruta correcta. Por favor accede a ‘/api/’');
        res.end();
    }

    if(splittedUrl[1] === 'api' && requestedUrl.path === '/api/' || requestedUrl.path === '/api') {
        // console.log('Dentro de ruta API');
        fs.readFile('./myFilms.json', 'utf-8', (err, data) => {
            const parsedData = JSON.parse(data);
            // console.log(parsedData);
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(data);
            res.end();
        }); 
    } 

    if(splittedUrl[2] && splittedUrl.length === 3) {
        // console.log('Dentro de ruta api/1');
        fs.readFile('./myFilms.json', 'utf-8', (err, data) => {
            const parsedData = JSON.parse(data);
            // console.log(parsedData);
            res.writeHead(200, {'Content-Type': 'application/json'});
            const filmItemName = `film${splittedUrl[2]}`;
            const filmToReturn = parsedData[filmItemName];
            res.write(JSON.stringify(filmToReturn));
            res.end();
        }); 
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});