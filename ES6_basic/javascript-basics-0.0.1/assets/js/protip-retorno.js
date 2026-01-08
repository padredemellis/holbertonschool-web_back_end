const persona = ( nombre, apellido ) => ({nombre, apellido}); //creo objetos sin poner el valor

const crearPersona = persona( 'Emanuel', 'Romero');

console.log(crearPersona);
//------------------------------------------------------------------------------  ... rest
const imprimeArgumentos = ( ...args ) => { console.log(args) };

const argumentos = imprimeArgumentos(1, 'hola', 'chau')

//----------------------------------------------------------------------------------------
//Darle un nombre a las posiciones del arreglo
const otra = ( edad, ...args ) => { 
    return args;
};

const [saludo, despedida, estudia, eslindo] = otra(1, 'hola', 'chau', true, false)
console.log( {saludo, despedida, estudia, eslindo} );

const { apellido } = persona ("Emanuel", 'Romero');
console.log({apellido});