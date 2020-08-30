// 1. Hacer require de todos los módulos que necesitemos
const http = require("http");
const url = require("url");

// 2. Crear el servidor
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  //console.log(parseUrl);

  const path = parsedUrl.path;
  //console.log(path);
  let name = path.split("/")[2];

  res.writeHead(200);
  res.end(`'hola'${name}! ¿Que tal te va?`);
});

// 3. Hacemos que el servidor escuche en un puerto
app.listen(3001);

console.log("Mi server esta tirando en el localhost:3000");
