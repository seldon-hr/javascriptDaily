const banda = 'Coldplay';
const canciones = ['Yellow', 'Fix You', 'Trouble'];
console.log(banda['length']);
console.log(canciones['len' + 'gth']);

// Output 8,3

// Tanto cadenas como arreglos son iterables, entonces podemos usar la nomenclatura de corchetes para acceder a sus valores.

// Todo lo que este dentro de los corchetes será evaluado como expresión, entonces ambos casos se ejecutaran correctamente, el primero solo ejecuta el método length y
// el segundo concatena ambas cadenas para finalmente ejecutar length para el arreglo.
