// First function

function sumar(a, b) {
    return a + b;
}

// Second function

const sumar = (a, b) => {
    return a + b;
}


/* 
Con una función como la primera es posible hacer esto:

console.log(suma(3,5)); //8
function sumar (a,b) {
    return a + b;
}

Podemos llamar la función antes de su declaración, característica que se denomina
hoisting.

Con una función de flecha esto no es posible:

console.log(sumar(3,5)); //Reference error: cant access lexical declaration sumar before initialization

const sumar = (a, b) => {
    return a + b;
}

*/