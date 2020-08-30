// Defino el contenido de mi módulo. En este caso un simple objeto
// con un método

var multipModule = require('./multipModule/index.js');

var libreria = {
    suma: function(item1, item2) {
        multipModule.multip(2, 2);
        console.log('La suma de los valores es: ', item1 + item2);
    }
};

libreria.suma(10, 20);


// Exporto mi módulo, indicándole cuál es el elemento que quiero
// exportar
module.exports = libreria;