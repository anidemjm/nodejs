const http = require("http");
const url = require("url");

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    //console.log(parseUrl);

    const path = parsedUrl.path;
    //console.log(path);
    let name = path.split("/")[2];

    res.writeHead(200);
    res.end(`'hola'${name}! ¿Que tal te va?`);
});

app.listen(5000);

console.log("Mi server esta tirando en el localhost:3000");