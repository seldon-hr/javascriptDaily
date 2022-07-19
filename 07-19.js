// Explica este código JavaScript
const info = {
  [Symbol('a')]: 'b'
}
console.log(info); 🤔?
console.log(Object.keys(info)); 🤔?

//   Respuesta Correcta: D) {Symbol("a"): "b"} y []
// Una variable de tipo Symbol cumple con 3 caracteristicas principales

// No es un elemento enumerable.
// Permite representar valores completamente únicos en el código, útil para crear llaves de objetos y evitar colisiones.
// Podemos crear propiedades ocultas en objetos.


// El primer console.log imprime el objeto en su totalidad, incluyendo los valores no enumerables, por ello podemos ver la key de tipo Symbol y su valor un string con valor b.

// Al intentar obtener las keys del objeto con Object.keys obtendremos un arreglo vacio justamente por que el Symbol no es un elemento que se pueda enumerar, 
// }de esta manera es posible "ocultar" ciertas propiedades de un objeto.
