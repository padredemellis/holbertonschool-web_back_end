const { createServer } = require('node:http'); // {createServer} esta desestructurando el objeto que devuelve require y obteniendo createServer.
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//=======================================================>Apuntes<===================================================
/*
require('node:http') => Carga todo el módulo http
{ createServer} => desestructura el modulo http y obtiene solo la función creatServer
Para crear un servidor básico usamos createServer(req, res) 
Ese callback recibe dos objetos muy importantes:

req (request/petición): Contiene la información de quien te visita.
res (response/respuesta): Es lo que tú le envías de vuelta al navegador.
*/