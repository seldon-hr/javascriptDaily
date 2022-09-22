let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + z);

/* 
Las variables declaradas con let y const tienen un contexto de bloque, esto significa que solo podrán ser
accedidas dentro del bloque de llaves donde fueron declaradas, por ejemplo dentro de un bloque if o dentro
de una función.

Esta premisa se cumple siempre y cuando esten declaradas dentro de un bloque, si una variable esta fuera de todo
bloque entonces se dice que es una variable global y por ende puede ser accedida desde cualquier parte del código.

*/