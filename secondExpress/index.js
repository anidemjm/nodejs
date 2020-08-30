const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  res.send('Esta es la pagina de inicio')
     
  });

  res;

  app.get("/blog", (req, res) => {
  res.json({
      status:'ok',
      crud: 'create',
});

// Falta terminar 
