var fs = require('fs');
var writeModule = require('../writeModule');

let countModule = {};

countModule.count = function() {
    fs.readFile('./el_quijote.txt', 'utf-8', (err, data) => {
        // console.log(data);
        // console.log('Procesando libro');
    
        let sanchosCounter = data.match(/Sancho/g).length;
        // console.log(sanchosCounter);
    
        let splittedData = data.split(' ');
        console.log(splittedData);
    
        sanchosCounter = 0;
        for (let i=0; i < splittedData.length; i+=1) {
            if(splittedData[i].search(/S[Aa][Nn][Cc][Hh][Oo]/g) !== -1) {
                sanchosCounter++;
            }
        }
    
        let contentToWrite = `Sancho aparece ${sanchosCounter} veces. NEW. `;
        console.log(contentToWrite);


        writeModule.write(contentToWrite);
    
        // fs.writeFile('./resultado.txt', contentToWrite, {encoding: 'utf-8'}, (err) =>{
        //     if(err) {
        //         throw new Error('Se ha producido un error al escribir el archivo resultado.txt');
        //     }
        //     console.log('Resultado.txt escrito correctamente');
        // });
    });
}

module.exports = countModule;