var fs = require('fs');
var countModule = require('./countModule');

// fs.open('./quijoteCounter/el_quijote.txt', 'r', (err, fd) => {
//     if(err) console.log(err);
//     console.log('fd is ', fd);
// });

console.log('Procesando libro');
countModule.count();