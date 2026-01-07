//# 🧪 Ejercicios de Práctica - ES6 (const, let, template literals)

/*## Nivel 1: Básico 🌱

### Ejercicio 1: Identificar errores
```javascript
const edad = 25;
edad = 26;
console.log(edad);
```
**Pregunta:** ¿Qué está mal en este código?  ¿Cómo lo arreglarías?
Lo que está mal es que la constante edad quiere ser cambiada mas adelante
Para arreglarlo:*/
let edad = 25;
edad = 26;
console.log(edad);
//---

/*### Ejercicio 2: Convertir var a const/let
```javascript
var nombre = 'Carlos';
var apellido = 'González';
var nombreCompleto = nombre + ' ' + apellido;
var edad = 30;
edad = 31;
```
**Tarea:** Convierte este código usando `const` y `let` apropiadamente.*/
const nombre = 'Carlos';
const apellido = 'González';
const nombreCompleto = nombre + ' ' + apellido;
let edad = 30;
edad = 31;
//---

/*### Ejercicio 3: Template literals básicos
```javascript
const producto = 'Laptop';
const precio = 1500;
const mensaje = 'El producto ' + producto + ' cuesta $' + precio;
```
**Tarea:** Reescribe el `mensaje` usando template literals.*/
const producto = 'Laptop';
const precio = 1500;
const mensaje = `El producto ${producto} cuesta $${precio}`;
//---

/*### Ejercicio 4: ¿const o let? 
Determina si debes usar `const` o `let` para cada variable: 

a) `_____ PI = 3.14159;`  const
b) `_____ contador = 0;` (se incrementará en un loop)  let
c) `_____ nombre = 'Ana';` (no cambiará)  const
d) `_____ temperatura = 20;` (puede subir o bajar)   let
e) `_____ URL_API = 'https://api.com';` (constante de configuración) const */

//---

//## Nivel 2: Intermedio 🌿

/*### Ejercicio 5: Refactorizar función
```javascript
function calcularTotal(precio, cantidad) {
  var subtotal = precio * cantidad;
  var iva = subtotal * 0.21;
  var total = subtotal + iva;
  return 'El total es: $' + total + ' (IVA incluido)';
}
```
**Tarea:** 
1. Cambia `var` por `const` o `let` según corresponda
2. Usa template literals para el return */
function calcularTotal(precio, cantidad) {
  const subtotal = precio * cantidad;
  const iva = subtotal * 0.21;
  const total = subtotal + iva;
  return `El total es: $${total} (IVA incluido)`;
}
//---

/*### Ejercicio 6: Arrays y objetos con const
```javascript
const frutas = ['manzana', 'pera'];
const persona = { nombre: 'Juan', edad: 25 };

// ¿Cuáles de estas operaciones funcionarán?  ¿Por qué?
frutas.push('naranja');           // A Funciona porque agrega con la funcion push
frutas = ['uva'];                 // B No funciona porque es una constante
persona.edad = 26;                // C Funciona porque apunta al contenido edad
persona = { nombre: 'Ana' };      // D No funciona porque esta apuntando a otro objeto y const lo prohibe
```*/

//---

/*### Ejercicio 7: Template literals con expresiones
Crea un template literal que: 
- Tenga las variables:  `nombre = 'María'`, `edad = 28`, `ciudad = 'Madrid'`
- Muestre:  "María tiene 28 años y en 10 años tendrá 38.  Vive en Madrid."
- Calcula la edad futura dentro del template literal*/

const nombre = 'María';
let edad = 28;
const ciudad = 'Madrid'
const mensaje = `${nombre} tiene ${edad} años y en 10 años tendrá ${edad + 10}. Vive en ${ciudad}`;
console.log(mensaje);

//---

/*### Ejercicio 8: Scope de bloque
function misterio() {
  const x = 10;
  
  if (true) {
    const x = 20;
    console.log(x);  // ¿Qué imprime aquí? 20 
  }
  
  console.log(x);  // ¿Y aquí? 10
}
```
**Pregunta:** ¿Qué imprimirá esta función y por qué?
Imprime 20 y 10 porque 20 esta dentro del if true y el 10 afuera
*/


//---

## Nivel 3: Avanzado 🌳

### Ejercicio 9: Loops y scope
```javascript
// Código A
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Código B
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
```
**Pregunta:** ¿Qué imprimirá cada código?  ¿Por qué son diferentes?

---

### Ejercicio 10: Refactorización completa
```javascript
function generarReporte(empleado) {
  var nombre = empleado.nombre;
  var salario = empleado.salario;
  var departamento = empleado.departamento;
  var bonus = salario * 0.10;
  var salarioTotal = salario + bonus;
  
  var reporte = '===== REPORTE DE EMPLEADO =====\n';
  reporte += 'Nombre: ' + nombre + '\n';
  reporte += 'Departamento: ' + departamento + '\n';
  reporte += 'Salario base: $' + salario + '\n';
  reporte += 'Bonus (10%): $' + bonus + '\n';
  reporte += 'Total: $' + salarioTotal + '\n';
  reporte += '================================';
  
  return reporte;
}
```
**Tarea:** 
1. Convierte todas las variables a `const` o `let`
2. Usa template literals (incluyendo multilínea)
3. Bonus: ¿Puedes hacerlo con un solo template literal?

---

### Ejercicio 11: Encontrar el bug
```javascript
const carrito = [];

function agregarProducto(producto, precio) {
  const item = {
    nombre: producto,
    precio: precio
  };
  carrito.push(item);
}

function calcularTotal() {
  const total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i]. precio;
  }
  return `Total del carrito: $${total}`;
}

agregarProducto('Libro', 15);
agregarProducto('Pluma', 2);
console.log(calcularTotal());
```
**Pregunta:** Este código tiene un error. ¿Dónde está y cómo lo arreglarías?

---

### Ejercicio 12: Template literals anidados
```javascript
const usuarios = [
  { nombre: 'Ana', edad: 25, activo: true },
  { nombre: 'Carlos', edad: 30, activo: false },
  { nombre: 'Luis', edad: 28, activo: true }
];
```
**Tarea:** Crea una función `generarListaHTML()` que:
- Use template literals multilínea
- Genere un string con HTML para cada usuario
- Muestre si está activo o inactivo usando operador ternario
- Formato esperado: 
```html
<ul>
  <li>Ana (25 años) - Estado:  Activo</li>
  <li>Carlos (30 años) - Estado: Inactivo</li>
  <li>Luis (28 años) - Estado: Activo</li>
</ul>
```

---

### Ejercicio 13: Const con objetos complejos
```javascript
const configuracion = {
  tema: 'oscuro',
  idioma: 'es',
  notificaciones: {
    email: true,
    push: false
  }
};
```
**Preguntas:**
a) ¿Puedo hacer `configuracion.tema = 'claro'`?  
b) ¿Puedo hacer `configuracion.notificaciones.push = true`?  
c) ¿Puedo hacer `configuracion = {}`?  
d) ¿Cómo harías el objeto realmente inmutable en JavaScript?

---

### Ejercicio 14: Desafío final - Sistema de calificaciones
Crea una función `generarBoletín(estudiante)` que:

**Input:**
```javascript
const estudiante = {
  nombre: 'Pedro Gómez',
  grado:  '10mo',
  materias: [
    { nombre: 'Matemáticas', nota: 85 },
    { nombre: 'Ciencias', nota: 92 },
    { nombre: 'Historia', nota: 78 },
    { nombre: 'Inglés', nota: 88 }
  ]
};
```

**Requisitos:**
1. Usa solo `const` y `let` (NO var)
2. Usa template literals para todo el output
3. Calcula el promedio de las notas
4. Determina si aprobó (promedio >= 80)
5. Formato del output: 
```
╔════════════════════════════════════╗
║       BOLETÍN DE CALIFICACIONES    ║
╚════════════════════════════════════╝

Estudiante: Pedro Gómez
Grado: 10mo

Materias:
  • Matemáticas: 85
  • Ciencias: 92
  • Historia: 78
  • Inglés: 88

Promedio: 85. 75
Estado:  APROBADO ✓
```

---

## 🎯 Bonus: Preguntas Teóricas

1. **¿Por qué se recomienda usar `const` por defecto?**

2. **¿Cuál es la diferencia entre "inmutabilidad" y "no reasignación"?**

3. **¿Qué problemas resuelven `let` y `const` comparados con `var`?**

4. **¿Cuándo usarías concatenación tradicional en lugar de template literals?**

5. **¿Qué es el "Temporal Dead Zone" (TDZ) y cómo afecta a `let` y `const`?**

---

¡Buena suerte! 💪 Cuando termines, compara tus soluciones con las mejores prácticas de ES6.