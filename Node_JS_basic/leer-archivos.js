const { readFile } = require('node:fs')
file = './peliculas.json'

readFile(file, 'utf-8',(err,contenido) => {
    if(err) {
        console.error("¡Ups! No pude leer el archivo", err);
        return;
    }
    console.log(`El contenido es: ${contenido}`);
});
console.log("Yo me ejecuto antes de que termine de de leerse el archivo");
//=======================================================>Apuntes<===================================================
/*
fs es un modulo asíncrono cuando leemos un archivo node no se detiene a esperar a que el disco duro responda
Node tiene un objeto global llamado process para acceder a argumentos de la liniea de comandos y a las variables de entorno:
process.argv para acceder a la linea de comandos
process.env para acceder a las variables de entorno: Se usan para guardar datos sensibles (como contraseñas de bases de datos) que no quieres escribir directamente en el código. Se acceden mediante process.env.NOMBRE_VARIABLE.
*/