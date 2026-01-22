const express = require('express');
const app = express(); // Creamos la aplicación de express

// Definir una ruta
app.get('/', (req, res) => {
  res.send('<h1>Hola desde Express!</h1>'); 
});

// Definir otra ruta
app.get('/contacto', (req, res) => {
  res.send('Página de contacto');
});

app.listen(3000, () => {
  console.log('Servidor Express en http://localhost:3000');
});