//crear un script que lea cualquier archivo que tú le digas en la terminal.
const { readFile } = require('node:fs/promises');

async function leerArchivo() {
    const nombreArchivo = process.argv[2];
    
    if (!nombreArchivo) {
        console.error("Error: Debes proporcionar un nombre de archivo.");
        console.log("Uso: node script.js <nombre_archivo>");
        return;
    }
    
    try {
        const data = await readFile(nombreArchivo, 'utf-8');
        console.log(`El contenido es:\n${data}`);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

leerArchivo();


//=======================================================>Apuntes<===================================================

/*
Node tiene un objeto global llamado process para acceder a argumentos de la liniea de comandos y a las variables de entorno:
process.argv para acceder a la linea de comandos
process.env para acceder a las variables de entorno: Se usan para guardar datos sensibles (como contraseñas de bases de datos) que no quieres escribir directamente en el código. Se acceden mediante process.env.NOMBRE_VARIABLE.
*/