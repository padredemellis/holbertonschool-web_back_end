//Operacion asincrona basica:
console.log("Antes");
setTimeout(() => {
  console.log("Hola, esto salió después de 2 segundos");
}, 2000);
console.log("Después");
//Creando una Promise: ejemplo simple
const promesa = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("Hola después de 5 segundos");
    },5000);
});
promesa.then((mensaje) =>{
    console.log(mensaje);
});
