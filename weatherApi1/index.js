const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');

const app = express();

const apiKey = 'c6ab92ff56fd0c00e6dd20bb710ccff4';
app.set('port', 3000);

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => res.send(json))
        .catch(err => console.log(err));
});

app.listen(app.get('port'), () => console.log('Running on port ', app.get('port')))