// Requerimos el archiso de sumar
const sumar = require('./sumar'); // Lo encuentra porque esta al mismo nivel de archivos.

// De nuevo reclamamos con el require el modulo "multiplicar"
const multiplicar = require('./multiplicar')
console.log(multiplicar.multiplica(5, 6)); // Para que vea la operacion.

console.log(sumar.sumarDosMasDos());
//console.log(sumar.sumar()); Le meto comment para que no se vea por otras operaciones.
console.log(sumar.suma(6, 9));