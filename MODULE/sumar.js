// Creación del modulo 

var sumarDosMasDos = function () {
    return 2 + 2;
}

exports.sumarDosMasDos = sumarDosMasDos; // exportación del modulo

//exports.sumar = sumarDosMasDos; // exportación del modulo

exports.suma = function (numero1, numero2) {
    return numero1 + numero2;
}