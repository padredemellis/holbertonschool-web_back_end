// los objetos literales son como los diccionarios de python. Tienen la llave y el valor
let personaje = {
    nombre: 'Tony Stark',   
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark I",'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
};
console.log(personaje);
console.log(`Nombre: ${personaje.nombre}`);
console.log(` Edad: ${personaje['edad']}`);
console.log(`Longitud: ${personaje['coords']['lng']}`);
console.log(`Latitud: ${personaje['coords']['lat']}`);
console.log(`Cantidad de trajes: ${personaje.trajes.length}`);
console.log(`Ultimo traje: ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = 'vivo';
console.log(`Vivo: ${personaje[x]}`); 

//Mas detalles

//Como borrar una propiedad?
delete personaje['edad'];
console.log(personaje);

const entriesPares = Object.entries( personaje ); //para que el objeto se cea en pares de valores.
console.log( entriesPares );

Object.freeze(personaje); 
//congela el objeto como estaba y no lo vas a poder modificar, pero si hay objetos dentro de otro objeto si se podra modificar

const propiedades = Object.getOwnPropertyDescriptor( personaje );
console.log( {propiedades} );

const valores = Object.values( personaje );
console.log( valores );