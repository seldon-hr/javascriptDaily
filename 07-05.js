// ¿Cuál es la salida del siguiente código?

const one = true || {} || null;
const two = null || 'hello' || '';
const three = 0 || [] || true;
console.log(one, two, three);

// Operador 'OR' ||

// Respuesta Correcta: B) true "hello" []
// Con el operador || "OR", devolvemos el primer valor booleano verdadero "true", si todos los valores son falsos, se devuelve el último valor de la sentencia.

// En la constante one: (true || {} || null); su primer valor es verdadero, por lo tanto, retorna true.

// En la constante two: (null || "hello" || ""); null es un valor falso "false", la cadena "hello" es un valor verdadero "true", por lo tanto, retornará la cadena "hello" y no evaluará más condiciones.

// En la constante three: (0 || [] || true); el valor 0 es un valor falso "false", mientras que el arreglo "array" vacío es un valor verdadero "true", por lo tanto retornaría el arreglo vacío.

// Entonces, la salida de este código sería: (true, "hello", []);
