const fs = require('fs');
const express = require('express');

const app = express();

app.set('port', 3000);
app.use(express.urlencoded({ extended: true }));

// Routes
app.all('/', (req, res) => {
    res.send('Tienes que llamar al endpoint /comandas');
});

app.get('/comandas', (req, res) => {
    fs.readFile('comandas.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) throw new Error('Se ha producido un error al leer el archivo', err);

        res.set('Content-Type', 'application/json');
        res.send(data);
    });
});

app.post('/comandas', (req, res) => {
    const comanda = req.body;
    const { pedido, camarero } = comanda;
    const timestamp = new Date().toString();    

    fs.readFile('comandas.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) throw new Error('Se ha producido un error al leer el archivo', err);

        let listaComandas = JSON.parse(data);
        // console.log('DATA is ', listaComandas);

        const numComandas = Object.keys(listaComandas).length;
        // console.log(numComandas);

        const comandaAAnadir = {
            [numComandas + 1]: {
                pedido,
                camarero,
                timestamp
            }
        };

        // console.log(comandaAAnadir);

        listaComandas = JSON.stringify({...listaComandas, ...comandaAAnadir});
        // console.log(listaComandas);

        fs.writeFile('comandas.json', listaComandas, {flag: 'w'}, (err) => {
            if(err) throw new Error('Se ha producido un error al escribir el archivo', err);

            console.log('El archivo se ha escrito correctamente');
        });
    });

    res.send(`Comanda recibida.
    Has pedido
        ${pedido}
    Te atendió el camarero: ${camarero}
    `);
});

app.get('/comandas/:id', (req, res) => {
    const comandaId = req.params.id;

    fs.readFile('comandas.json', {encoding: 'utf-8'}, (err, data) => {
        if(err) throw new Error('Se ha producido un error al leer el archivo', err);

        const listaComandas = JSON.parse(data);
        const comandaADevolver = listaComandas[comandaId];

        res.set('Content-Type', 'application/json');
        res.send(comandaADevolver);
    });
});

// Running server
app.listen(app.get('port'), () => console.log('Running on port ', app.get('port')))