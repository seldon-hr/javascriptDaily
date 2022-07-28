// Explica este código JavaScript 😎

const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;
console.log(one, two, three); // 🤔?

// Respuesta Correcta: C) {} "" []
// En javascript el código se lee de arriba hacia abajo y de izquierda a derecha.

// Para la variable one: false || {} || null

// Primero evaluamos false || {} y obtenemos {}.
// Entonces nos queda {} || null y como las llaves vacías es un valor truthy entonces el null no se evalua dando como resultado {}.

// Para la variable two: null || false || "" Primero evaluamos null || false, null es falsy entonces si ejecutamos false.
// Entonces nos queda false || "", y obtenemos como resultado la cadena vacía "".

// Para la variable three: [] || 0 || true Primero evaluamos [] || 0, el arreglo vacío es un valor truthy por lo que 0 no se ejecuta. Entonces nos queda [] || true, 
//  nuevamente el arreglo vacío es truthy y esta vez es true quien no se llega a ejecutar, entonces el resultado es [].
