// Este archivo es el archivo principal de mi app. Normalmente se
// llama index.js o app.js    Contiene los require de todos los
// módulos que vaya a utilizar mi app

// Importo o requiero el módulo sumModule, que previamente he
// definido en la carpeta lib (libraries).

var moduloSuma = require('./lib/sumModule.js');


// Hago uso de un método del módulo sumModule.
// ¿Por qué llamo al método a través de moduloSuma.? Porque
// al hacer el require yo le he dicho que todo ese módulo se va a
// llamar moduloSuma

moduloSuma.suma(20, 30);

