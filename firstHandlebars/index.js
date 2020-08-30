const fs = require('fs');
const handlebars = require('handlebars');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

let data = {
    libro1: {
    titulo: 'El Señor de los Anillos - El Retorno del Rey',
    autor: 'JRR Tolkien <b>Prueba</b>',
    edicion: 'Tapa dura',
    personajes: ['Frodo Bolson', 'Gandalf el Blanco'],
    imdb: true
    },
    libro2: {
        titulo: 'Juego de Tronos',
        autor: 'George R.R. Martin',
        edicion: 'Tapa blanda',
        personajes: ['John Snow', 'Tyrion Lannister'],
        imdb: true
    },
    nav: [{ url: "foo", test: true, title: "bar" }, { url: "bar" }]
};

app.get('/', (req, res) => {
    const inFile = './views/index.hbs';
    // const outFile = './public/index.html';

    // let data = {title: 'Hello world!', name: 'Pepe'};

    const source = fs.readFileSync(inFile, 'utf-8');
    const template = handlebars.compile(source, { strict: true });
    const result = template(data);

    res.send(result);

    // fs.writeFileSync(outFile, result);
    // console.log('HTML generado correctamente');
});

// app.get('/:title', (req, res) => {
//     const title = req.params.title;
//     const inFile = './views/index.hbs';

//     let data = {title: title, name: 'Juan'};

//     const source = fs.readFileSync(inFile, 'utf-8');
//     const template = handlebars.compile(source, { strict: true });
//     const result = template(data);

//     res.send(result);
// });


app.get('/libros', (req, res) => {

    // handlebars.registerHelper('capitalize', function(text) {
    //     let textCapitalized = text.toLowerCase().split(' ').map(function(word) {
    //     return word[0].toUpperCase() + word.substr(1);
    //     }).join(' ');
    //     return new Handlebars.SafeString(textCapitalized);
    // });

    handlebars.registerHelper("bold", function(options) {
        return new handlebars.SafeString('<strong>' + options.fn(this) + "</strong>");
      });
        
    // Lee el archivo de plantilla HBS
    const source = fs.readFileSync('./views/libros.hbs', 'utf-8');
    // Compila la plantilla = Combinar plantilla + datos
    const template = handlebars.compile(source, { strict: true });
    // Ejecuto la compilación y guardo el resultado en una variable
    const result = template(data);

    res.send(result);

    // // Si quisiéramos escribir el HTML resultante a un archivo
    // fs.writeFileSync('./public/libros.html', result);
    // console.log('HTML generado correctamente');
    // res.end();
});


app.listen(3000, () => console.log('Running on 3000'));