const fs = require("fs");
const handlebars = require("handlebars");
const express = require("express");

const inFile = "./views/index.hbs";
const outFile = "./public/index.html";

let data = {
  libro1: {
    titulo: "El Señor de los Anillos",
    autor: "JRR Tolkien",
    edicion: "Tapa dura",
    personajes: ["Frodo Bolson”, “Gandalf el Blanco"],
  },
  libro2: {
    titulo: "Juego de Tronos",
    autor: "George R.R. Martin",
    edicion: "Tapa blanda",
    personajes: ["John Snow", "Tyrion Lannister"],
  },
};

app.listen(3000, () => console.log("running on 3000 "));
