conts express = require('express');

const app = express();

const appPort = 3000;

app.listen(appPort, () => console.log('Running on', appPort));