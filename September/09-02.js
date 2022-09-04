const f = (arr) => Array.isArray(arr) && !arr.length;
console.log(f([1, 2, 3]));
console.log(f([0]));
console.log(f([]));

/* 
Output -> false false true

Este ejemplo es bien sencillo pero abarca variso temas interesantes de javascript.
La función se encarga de verificar si un arreglo esta vacío o no, para ello hacemos una doble verificación:

Primero, corroboramos que el parámeytro arr se uan arrelgo, la manera más eficiente de hacerlo es usando
el método 'isArray' del objeto Array el cual regresa 'true' si es un arreglo y 'false' sino lo es.

Segundo, corrobramos que la longitud del arreglo sea 0 y convertimos esa salida a boolean para poder hacer una
comparación de booleanos con el operador de corto circuito &&.

Veamos caso por caso:

[1, 2, 3], es un arreglo pero no esta vacío. Entonces tendríamos: true && false, que evalua a false.
[0], es un arreglo y tampoco esta vacío. Entonces tendríamos: true && false, que evalua a false.
[] es un arreglo y esta vacío. Entonces terndríamos: true && true, que evalua a true.
Output -> false false true
*/