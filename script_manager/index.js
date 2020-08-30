const fs = require('fs');

const fileName = process.argv[2];

console.log('PROCESS IS ', process.argv);

if(!fileName) {
    throw Error('No existe el archivo');
}

fs.watch(fileName, () => console.log(`El archivo ${fileName} ha sido modificado`));

console.log('Comprobando el estado del archivo ', fileName);