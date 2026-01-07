/* 
const arr = new Array(10); --> Esta es una forma de declarar un arreglo
const arr = [];
console.log(arr);
*/

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videojuegos);
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr.Light']
];

console.log(arregloCosas[7][3])