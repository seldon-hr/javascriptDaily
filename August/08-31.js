const names = ['Idaho', 'Gurney', 'Hawat', ...['Paul']];
const [, , , miName] = names;
console.log(miName['length']);
//Output 4

/*
Cuando pretendemos hace una desestructuración de arreglos es súper importante tener en cuenta los índices del mismo. Usando
la sintaxis de la , podemos saltar posiciones del arreglo hasta encontrar la propiedad que se debe obtener.

En el ejemplo usamos 3 veces , por ello saltamos 3 posiciones del array de names para poder obtner (con spread operator) la
cadena Paul del array anidado.

Finalmente aplicamos el método length con sintaxis de corchete.


*/

