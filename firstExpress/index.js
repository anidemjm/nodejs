const express = require('express');
const app = express();

// Permito acceso a archivos estáticos
app.use(express.static('./public'));

// Añadimos el parser para x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Añadimos el parser para JSON
app.use(express.json());

// Defino los endpoints / rutas
app.get('/', (req, res) => {
    res.send('Hello world! GET');
});

app.post('/', (req, res) => {
    console.log(req.body);
    const receivedData = req.body;
    res.send('Esto es una petición POST');
});

app.delete('/', (req, res) => {
    res.send('Hello world! DELETE');
});

// Ejecuto el servidor para que escuche en el puerto indicado
app.listen(3000, () => {
    console.log('Running on port 3000');
});