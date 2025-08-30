/* 
Un objeto es una coleccion de propiedades, una propiedad es una asociacion entre una clave y un valor.
*/
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false,
}
//Destructuring (sacar el contenido de un objeto y ponerlo en variables con el nombre de las claves)
const {nombre} = producto
console.log(nombre)

// Colocar dentro de un objeto variables (Object literal Enhacement)

const auntenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    auntenticado: auntenticado,
    usuario: usuario,
}

console.log(nuevoObjeto)

//Manipulacion de objetos
producto.disponible = "true"

console.log(producto)

delete producto.precio

console.log(producto)