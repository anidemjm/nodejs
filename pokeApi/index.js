// Importo los módulos y librerías a utilizar
const http = require('http');
const fetch = require('node-fetch');
const url = require('url');

// Creo el servidor
const app = http.createServer((req, res) => {
    // console.log(request.url);
    const reqUrl = url.parse(req.url, true);
    // console.log(reqUrl);

    const pokeName = reqUrl.pathname.split('/')[2];
    // console.log(pokeName);

    const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(pokeApiUrl)
        .then(res => res.json())
        .then(jsonRes => {
            jsonRes.origin = 'My own API';
            return jsonRes;
        })
        .then(finalRes => res.end(JSON.stringify(finalRes)))
        .catch(err => {
            console.log(err);
        })

    // res.end('Done');
});

app.listen(3000);