const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined', {immediate: true}));

app.get('/', (req, res) => {
    // res.send('Llamada a la ruta base');
    console.log('Petición recibida');
});

app.listen(3000, () => console.log('Running'));