// ¿Qué devuelve el siguiente código?
function makeMulti(x) {
  return (y) => x * y;
}

const five = makeMulti(5);
const rta = five(6);
console.log(rta);

// Respuesta Correcta: C) 30
// Aquí tenemos el escenario de un closure, un closure es:

// - Una función que puede recibir un dato y lo almacena en su scope
// - Retorna una función que ocupa ese dato previamente guardado

// En este caso estamos haciendo una "fábrica" de multiplicadores.

// // five es una función que tiene guardada en su scope la variable x con el valor de 5
// const five = makeMulti(5);

// // Ahora podemos pasarle a la función five cualquier valor que queramos multiplicar por 5
// const rta = five(6);

// // Podemos hacer más funciones multiplicadoras como:
// const seven = makeMulti(7);
// const two = makeMulti(2);
