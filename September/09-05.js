const array = ['a', 'bb', 'ccc'];
const rta = array.map((item) => item.length);
/*
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

.map() es inmutable, por lo tanto, no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada. Además, mantienes el mismo length que el array original,
te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.


*/
