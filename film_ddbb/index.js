var fs = require('fs');

const filmDbPath = './myDdbb/myFilms.json';

function checkDdbbFolder() {
    // Checking if my Ddbb folder exists
    fs.stat('./myDdbb', (err, stats) => {
        if(err) {
            console.log('El directorio no existe. Creando...');
            fs.mkdir('./myDdbb', (err, path) => {
                if(err) {
                    console.log(err);
                    throw new Error('Se ha producido un error creando el directorio');
                }
                console.log('The path is ', path);
            });
        }

        // Getting params from CLI
        const filmName = process.argv[2];
        const filmYear = process.argv[3];
        const filmRating = process.argv[4];

        // Creating JSON object to add
        const filmToAdd = {
            filmName,
            filmYear,
            filmRating,
        };

        const dataToAdd = JSON.stringify(filmToAdd) + ', ';

        fs.open(filmDbPath, 'a', (err, fd) => {
            if(err) throw new Error('Error abriendo el archivo myFilms.json', err);
            fs.writeFile(filmDbPath, dataToAdd, {flag: 'a'}, (err) => {
                if(err) throw new Error('Error escribiendo el archivo', err);
                console.log('¡Archivo escrito!');
                fs.close(fd, (err) => {
                    if(err) throw new Error('Error al cerrar el archivo', err);
                })
            })
        });

        // fs.readFile(filmDbPath, {encoding: 'utf-8'}, (err, data) => {
        //     if(err) {
        //         console.log(err);
        //         throw new Error('Error abriendo el archivo JSON');
        //     }
        //     console.log(data);
        // });
    })
}

checkDdbbFolder();