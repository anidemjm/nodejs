var moduloAtaque = require("./ejercicio1/lib/valores");

generarPokemon: function () {
    let nombres = ["Bulbasur", "Pikachu", "Charizard", "Mew", "Onix"];
    let numAleatorio = (Math.floor.random() * nombres.length);
    let nombreSeleccionado = nombres[numAleatorio];
    let valoresSeleccionado = valores[numAleatorio];


    return ValoresSeleccionado;

};