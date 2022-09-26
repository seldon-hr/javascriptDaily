let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

/* 
La primera función en llamrse es increaseNumber que solo se encarga de retornar la variable num y luego la incrementa:
num no esta en el scope de la función por eso pasamos a buscar la variable en el scope global. Esta función regresará 10.

num1 se pasa como parámetro a increasePassedNumber que hace lo mismo que increaseNumber, regresa primero el
valor de la variable y luego la incrementa, por ello obtenemos nuevamente como salida el valor 10.
*/