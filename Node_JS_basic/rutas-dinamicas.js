const express = require('express');
const app = express();

// Ruta con múltiples parámetros
app.get('/tienda/:producto/:id', (req, res) => {
    // Los parámetros viajan en req.params
    const { producto, id } = req.params; 
    
    res.send(`Estás viendo el producto: ${producto} con el código número: ${id}`);
});

app.listen(3000);

