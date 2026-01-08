function saludar (nombre){
    console.log( arguments );
    console.log(`Hola ${nombre}`);
    return 1;
};

nombre = 'Emanuel';

const saludar2 = function( nombre ){
    console.log(`Hola ${nombre}, esto es una función anonima`);
};

saludar( nombre, 33, true, 'Uruguay' );
saludar2(nombre);


const saludarFlecha = ( nombre ) => {
    console.log(`Hola ${nombre}`);
};

saludarFlecha( nombre );

const sumar = (num1, num2) =>  num1 + num2 ; // solo aplica para una sola linea y un return

console.log(sumar(5,3));

function getAleatorio() {
    return Math.random();
};

console.log( getAleatorio() );

const obtenerAleatorio = () =>  Math.random();

console.log( obtenerAleatorio() );