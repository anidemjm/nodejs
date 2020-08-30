const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.get('/weather/:city', (res, res) => {
  const linkApi = `api.openweathermap.org/data/2.5/weather?q=${req.params.city}
    APPID=95b078fbe4a0a5178ba28801a12d7de2`;

  res.send(`Esta es la ciudad ${req.params.city}`);

  fetch(linkApi)
    .then((res) => res.json())
    .then((json => {

      console.log(json)
    })
    .catch(err => console.log('La ciudad no se encuentra', err));
    // No funciona para sacar el error.
});

app.listen(3000);
