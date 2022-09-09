!!null;
!!'';
!!1;

/* 
false
false
true

El operador !! realiza una doble negación.

En el primer caso, por coerción de tipos, null es un valor falsy, si lo negamos 2 veces tendcríamos false.
En el segundo caso, por coerción de tipo, '' es un valor falsy, si lo negamos 2 veces tendríamos false.
Por último, el tercer caso, y nuevamente por coerción de tipos, el valor 1 es un valor truthy, si lo negamos 2 veces, obtenemos true.
*/