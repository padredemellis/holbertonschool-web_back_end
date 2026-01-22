const { createServer } = require('node:http'); //importamos la funcion para crear un servidor
const { readFile } = require('node:fs'); //importamos la funcion para leer un archivo

const server = createServer((req, res) => { //creamos el servidor
    readFile('./index.html', (err,data) => { //intentamos leer un archivo
        if(err){ //si hay un error
            res.statusCode = 500; //error del servidor
            res.end('Error al leer el archivo');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html'); //le avisamos al navegador que es un html
            res.end(data);
        }
    });
});
server.listen(3000); //Le decimos al servidor que empiece a escuchar en el puerto 3000