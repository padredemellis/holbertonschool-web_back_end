const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: 'Juan',
  premium: true,
};

const carrito = {
  cantidad: 1,
  ...producto,
};

const objUnidos = { ...cliente, ...producto };

console.log(objUnidos);
