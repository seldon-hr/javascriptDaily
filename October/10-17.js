'use strict';

function myFunction() {
    return (pi = 3.1416);
}

console.log(myFunction());

/* 
    Lo que habilita la primera línea es el 'modo estricto', el cual nos permite escribir código más seguro,
    habilita restricciones a nuestro código, En myFunction() no vamos a poder usar variables no declaradas
    como es el caso de 'pi'.

*/