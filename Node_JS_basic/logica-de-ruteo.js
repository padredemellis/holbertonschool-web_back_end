//Routing
const { createServer } = require('node:http');

const server = createServer((req,res) =>{
    const { url, method } = req;

    if (url === '/usuario' && method === 'GET'){
        res.statusCode = 200;
        res.end = ('Aquí tienes los datos del usuario.');
    } else if (url === '/usuario' && method === 'DELETE'){
        res.statusCode = 200;
        res.end('Usuario eliminado con éxito');
    } else{
        res.statusCode = 404;
        res.end('Ruta o método no permitido.');
    }
});
server.listen(3000);