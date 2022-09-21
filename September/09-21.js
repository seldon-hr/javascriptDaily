[1, 2, 3].map((num) => {
    if(typeof num === 'number') return;
    return num * 2;
})

//Output -> [undefined, undefined, undefined]

/* 
El método 'map' es propio del paradigma de la programaicón funcional. Este método
siempre retorna un nuevo arreglo.

En el ejemplo puesto, estamos iterando sobre un arreglo de números, la condición
evaluará 'true' para cada uno de los elementos del array, pero hay 2 sentencias
'return'. JavaScript ignora todo el código que esta después del primer 'return' que 
encuentra. Dicho esto, tendríamos algo así:

[1, 2, 3].map(num => {
    if(typeof num === 'number') 
    return;
});

Ahora, si bien la condición se evalua 'true', el return no devuelve nada, siemplemente
hace que el código se salga del 'map'.
Cuando no devolvemos nada en 'return', 'map' regresa siempre 'undefined'.

Al tener 3 elementos en el array, y recordando que map siempre regresa un array, obtenemos
como resultado final un array de 3 'undefined'.
*/