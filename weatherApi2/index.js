// Require de los módulos que voy a usar
const express = require('express');
const handlebars = require('handlebars');
const engines = require('consolidate');
const fetch = require('node-fetch');

// Lanzo servidor
const app = express();

// Defino algunas constantes que voy a utilizar
const appPort = 3000;
const apiKey = 'c6ab92ff56fd0c00e6dd20bb710ccff4';

// Añado configuración de Handlebars para que Express pueda trabajar con él
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Sirvo archivos estáticos a través de la carpeta /public
app.use(express.static(__dirname + '/public'));

// Rutas
app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    handlebars.registerHelper('alertatemp', function(options) {
        if(Number(options.fn(this)) > 38) {
            return options.fn(this) + ' <span style="font-weight: bold; font-size: 1.5em; color: red">OJO! Hay riesgo de ola de calor</span>';
        } else {
            return options.fn(this) + ' No hay riesgo de ola de calor';
        }
    });

    handlebars.registerHelper('mayusculas', function(options) {
        const cityName = String(options.fn(this)).toUpperCase();
        return cityName;
    });

    // Hago la petición a la Weather API
    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.render('weather', json);
        })
        .catch(err => new Error('Error en la petición a la API del tiempo', err))
});

// Arranco servidor a la escucha en puerto
app.listen(appPort, () => console.log('Runnning on ', appPort));