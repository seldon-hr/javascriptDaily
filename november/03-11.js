
anotherFn();

function anotherFn() {
  console.log(myNumber + myNumber);
}

let myNumber = 8;

/* 
    Output → Uncaught ReferenceError: myNumber is not defined.

    El erro es debido a un concepto que pued ser un poco confuso al empezar en JavasScript: Hoisting
    Hoisting es una técnica de desplazamiento de declaración de variables y funciones Cuando se delclara una
    variablbe o una función, el código es desplazado hacia arriba, lo qeu significa que la variable o fucnión
    puede ser utilizada antes de qeu se haya declarado.
    
    Conceptualemente, por ejemplo, una estricta definición de Hoisting sugiere que las declaraciones de variables
    y funciones son físicamente movidad al comienzo del código, pero esto no ocurre en realidad. Lo que sucede
    es que las declaraciones de variables y funicones son asignadas en memoria durante la fase de compilación, pero quedan 
    exactamente en dónde las has escrito en el código. (mdn)
*/