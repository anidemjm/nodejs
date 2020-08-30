const express = require('express');
const app = express();
const mysql = require('mysql');

const appPort = 3000;

const accessInfo = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sakila'
};

app.get('/actor', (req, res) => {
    const connection = mysql.createConnection(accessInfo);
    connection.connect();

    // // Si queremos más detalles sobre la conexión y posibles errores
    // connection.connect(function(err) {
    //     if (err) {
    //       console.error('error connecting: ' + err.stack);
    //       return;
    //     }
    
    //     console.log('connected as id ' + connection.threadId);
    //   });

    const limit = 5;

    const query = `SELECT * FROM actor LIMIT ${limit}`;

    
    connection.query(query, function(err, rows, fields) {
        if(err) throw new Error('Fallo bbdd', err);
        console.log(rows);

        console.log(rows[0]);
        res.send(rows);
    });

    connection.end();
});


app.listen(appPort, () => console.log('Running on ', appPort));