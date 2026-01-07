

let juegos = ['Zelda', 'Mario', 'Metroid', ' Chrono'];
console.log(`Largo: ${juegos.length}`)

let primero = juegos[0];
let ultimo = juegos[3];

console.log({primero, ultimo})

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

let nuevaLongitud = juegos.push('F-Zero'); // añade un nuevo elemento al array y retorna su nueva longitud
console.log({ nuevaLongitud, juegos});

juegos.unshift('Fire Emblem'); //añade un nuevo elemento al inicio del arreglo y retorna su cantidad
console.log({ nuevaLongitud, juegos});

let eliminado = juegos.pop(); //sirve para borrar el ultimo elemento del arreglo y lo regresa
console.log({eliminado, juegos})

//Pasos para borrar un elemento dentro del array
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log( {juegosBorrados, juegos});

//Para saber el indice
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});