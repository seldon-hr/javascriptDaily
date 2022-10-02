const myLifeSummedUp = ["CUP", "LAPTOP", "wINE", "CHOCOLATE"];

for (let item in myLifeSummedUp) {
    console.log(item); 
}

for (let item of myLifeSummedUp) {
    console.log(item); 
}
// 0 1 2 3 y CUP LAPTOP wINE CHOCOLATE
/* 

    Con el bucle for-in, podemos iterar sobre propiedades enumerables. Los enumberables en el arreglo son
    justamentes sus índices. Por ello es 0 1 2 3

    Con un bucle for-of, podemos recorrer iterables. Un arreglo por definción es un iterable, en cada iteración
    la variable item es igual al elemento sobre el cual se itera en ese momento. Por ello es CUP LAPTOP wINE CHOCOLATE

    En la práctica los ciclos for-of son más usados, y ocasionalmente los bucles for-in.
*/