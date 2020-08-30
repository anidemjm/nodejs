const express = require("express");
const cors = require('cors');
const app = express();

// Indico que haga uso de CORS para permitir acceso desde otros orígenes
app.use(cors());

// Indico que use parser de datos de formulario
app.use(express.urlencoded({
    extended: true
}));

// Añado rutas / endpoints
app.all('/', (request, response, next) => {
    console.log('Bienvenido a mi API');
    response.send();
});

app.post('/', (request, response, next) => {
    const incomingData = request.body;
    // console.log(incomingData);
    response.send(`El usuario con nombre ${incomingData.name} tiene como profesión ${incomingData.jobTitle}`);
});

// Arranco app en puerto 3000
app.listen(3000, () => console.log('Running on 3000'));