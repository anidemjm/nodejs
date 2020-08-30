const express = require('express');
const app = express();

app.get('/blog/:category/:id', function(req, res){
    console.log(req.params);
    res.send(`El post nº ${req.params.id} está en la categoría ${req.params.category}`);
});

app.get('/flights/:from.:to', function(req, res){
    console.log(req.params);
    res.end();
 });


app.listen(3000, () => console.log('Running'));
