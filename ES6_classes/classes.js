class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto = new Producto('Monitor curvo de 49', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto);
console.log(producto2);