const fs = require('fs');
const handlebars = require('handlebars');
const express = require('express');


const app = express();
app.use(express.static('__dirname + /public'));



const inFile = './views/index.hbs';
const outFile = './public/index.html';

let data = {
    title: 'Hello world!'
};
const source = fs.readFileSync(inFile, 'utf-8');
const template = handlebars.compile(source, {
    strict: true
});
const result = template(data);

fs.writeFileSync(outFile, result);
console.log('HTML generado correctamente');

app.listen(3000, () => console.log('running on 3000 '));