<<<<<<< HEAD
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
=======
const profesores = ['Oscar', 'Nico', 'Freddy', 'Christian', 'Angela'];
console.log(profesores.at(1)); //?
console.log(profesores.at(-1)); //?
console.log(profesores.at(10)); //?
console.log(profesores.at(3.8)); //?
console.log(profesores.at(-3.3)); //?

/*
Respuesta Correcta: A) Nico Angela undefined Christian Freddy
El método .at es una nueva forma de poder acceder a elementos de arreglos o a caracteres de cadenas.

Recibe como parámetro un número que representa en este ejemplo el índice al cual se quiere acceder.

.at(1) regresa el item "Nico" puesto que tiene el índice 1.
.at(-1) regresa el item "Angela", es una manera elegante de acceder al último item de un arreglo.
.at(10) regresa undefiend puesto que no existe un item con dicho índice en el arreglo.
.at(3.8) y .at(-3.3) solo tomaran la parte entera del parámetro, por ende tendremos .at(3) que regresa "Christian" y at.(-3) que regresa "Freddy".



*/
>>>>>>> b92eb9eb40d3d7424966d96d8665fea04508da05
