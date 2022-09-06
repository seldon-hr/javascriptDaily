const array = [1, 1, 1, 1, 1];
const rta = array.reduce((total, item) =>  total + item, 0);

/*
El método reduce() recorre el array y llama la fucnión reductora, almacena el valor del cálculo del array por la función en
un acumulador.
Un acumulador es una variable que se recuerda todas las iteraciones para almacenar los resultados acumulados de recorrer un array.
Podemos usar esto para iterar a través del array, agregar el valor del elemento acumulador y obtener la suma del array.

El código representado es un ejemplo de la implementación de una función reductora para sumar todos los elementos del array.


*/
