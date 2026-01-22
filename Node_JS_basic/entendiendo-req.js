const server = createServer((req, res) => {
  if (req.url === '/hola') {
    res.statusCode = 200;
    res.end('¡Hola! Bienvenido a la ruta especial.');
  } else {
    res.statusCode = 404;
    res.end('Lo siento, esta pagina no existe.');
  }
  server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
  });
});

//=======================================================>Apuntes<===================================================
/*
req.url obtiene la informacion de la direccion en la que está el usuario
*/