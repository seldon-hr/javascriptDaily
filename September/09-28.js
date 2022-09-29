const one = true || {} || null;
const two = null || 'hello' || '';
const three = 0 || [] || true;
console.log(one, two, three);
console.log(Boolean(typeof({})));

/* 
Con el operador || 'OR', devolvemos el primer valor booleano verdadero 'true', si todos los valores
son falsos, se devuelve el último valor de la sentencia.

En la constante two: (true || {} || null); su primer valor falso 'false', la cadena 'hello' es un 
verdadero 'true', por lo tanto, retornará la cadena 'hello' y no evaluará más condiciones.

En la cosntante three: (0 || [] || true); el valor 0 s un valor 'false', mientras que el arreglo 'array' vacío
es un valor verdadero 'true', por lo tanto retornaría el arreglo vacío.

Output -> true, 'hello', [];
*/