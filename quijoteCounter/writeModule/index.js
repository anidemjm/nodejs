var fs = require('fs');

let writeModule = {};

writeModule.write = function(contentToWrite) {
    fs.writeFile('./resultado.txt', contentToWrite, {encoding: 'utf-8'}, (err) =>{
        if(err) {
            throw new Error('Se ha producido un error al escribir el archivo resultado.txt');
        }
        console.log('Resultado.txt escrito correctamente');
    });
}

module.exports = writeModule;