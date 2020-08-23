var fs = require('fs');

var leerQuijote = {

    readQuijote: function () {

        fs.readfile('./el_quijote.txt', 'utf-8');
        console.log("Procesando libro")
    }

}

module.exports = leerQuijote