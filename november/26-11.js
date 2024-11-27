const tienda = new Map();
tienda.set('frutas', ['manzana', 'pera', 'uva']);
tienda.set('precios', { manzana: 3, pera: 2, uva: 4 });
tienda.set('abierta', true);


// 1. Mostrar el contenido de la tienda como tipo array.
console.log([...tienda]);

// 2. Object.fromEntries (convierte a objeto)
console.log(Object.fromEntries(tienda));
// Muestra: {frutas: ["manzana", "pera"], precios: {manzana: 1, pera: 2}, abierto: true}

// 3. forEach (más legible)
tienda.forEach((valor, clave) => {
    console.log(`${clave}: ${JSON.stringify(valor)}`);
});