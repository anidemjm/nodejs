const http = require("http");

http
  .createServer((req, res, err) => {
    res.write("Esto funciona mal");
    res.end();
  })
  .listen(3000);

console.log("Mi server esta tirando en el localhost:3000");

// falta añadir error.