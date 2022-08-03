// ¿Cuál es el resultado del siguiente código?
let name = 'Dan';

function getName() {
    console.log(name);
    let name = 'Sarah';
}

getName();

/*
El siguiente código manda un 'Reference Error', porque la variable a la cual
quiere acceder no existe, aún no se ha declarado al momento de imprimirla.

Es decir, el scope de let y const tes de bloque, solo se conocen dentro de sus
bloques, *la función es un bloque.

La función getName intenta imprimir por consola name antes de ser declarada, por
hoisting el interprete de JS hará que name entre en lo que se denomina 
'Temporal Dead Zone, una región donde la variable esta declarada pero no es
posible acceder a ella.
Así produciendo un ReferenceError


Ahora si dentro de la función getName la variable name estuviera declarada con var:

funcition getName() {
    console.log(name);
    var name = 'Sarah';
}

Por hoisting el resultado sería undefined puesto que la Temporal Dead Zone solo
existe con variables declaradas con let y const.
*/