const fs = require('fs');
const handlebars = require('handlebars');
const engines = require('consolidate');
const express = require('express');

const app = express();
app.set('port', 3000);

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/usuarios', (req, res) => {
    const data = {
        name: 'Pepe',
        age: 20
    };

    res.render('usuarios', data);
});


app.get('/libros', (req, res) => {
    let data = {
        libros: [
            {
                titulo: 'El Señor de los Anillos - El Retorno del Rey',
                autor: 'JRR Tolkien',
                edicion: 'Tapa dura',
                personajes: ['Frodo Bolson', 'Gandalf el Blanco'],
                amazon: true,
                anioPublicacion: 1960
            },
            {
                titulo: 'Juego de Tronos',
                autor: 'George R.R. Martin',
                edicion: 'Tapa blanda',
                personajes: ['John Snow', 'Tyrion Lannister'],
                amazon: false
            }
        ]
    };

    // // Custom helper
    // handlebars.registerHelper('mayoredad', function(key, value, options) {
    //     console.log('THIS IS ', this);
    //     console.log('KEY IS ', key);
    //     console.log('VALUE IS ', value);
    //     console.log('OPTIONS ', options);

    //     if(value >= 18) {
    //         return '<p>Es mayor de 18</p>';
    //     } else {
    //         return '<p>Es MENOR de 18</p>';
    //     }

    //     // return new handlebars.SafeString('<strong>' + options.fn(this) + '</strong>');
        
    // });

    // // Bloque parcial
    // handlebars.registerPartial('copyright', function() {
    //     return '<p>Copyright 2020</p>';
    // });

    const source = fs.readFileSync('./views/libros.hbs', 'utf-8');
    const template = handlebars.compile(source, { strict: true });
    const result = template(data);

    res.send(result);

});

app.listen(app.get('port'), () => console.log('Running on ', app.get('port')));