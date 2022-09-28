console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));

/* 
Los dos primero casos no hay problema, son conversiónes con el constructor Number, y Boolean, así creando
así que ambos van a ser iguales. Output true.

Tercero, ningún Symbol es iugal a otro Symbol, por más que en el ejemplo tengan los mismo placeholers foo, nunca serán 
iguales Entonces siempre nos dará false.

No debemos confundir el constructor Number y Boolean por sí mismos, con dichos aocmpañados de la palabra new, si
hacemos lo siguiente.

const a = new Number(2);
const b = new Boolen(true);

Ambas variables serán objetos creaos por medio de estos constructores, y no solo conversiones como en el 
ejercicio principal del reto.

*/