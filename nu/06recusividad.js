/* Estructura básica de la recursividad */

// function recursiva() {
//     if (/* validación */) {
//         //llamados recursivos
//     } else {
//         //lamados no recursivos
//     }
// }

// Imprimir la cuenta de un número hasta otro.
function printUntilXNumber(number, target) {
    console.log(number)
    if (number < target) {
        printUntilXNumber(number + 1, target)
    } else {
        return target;
    }
}
console.debug(printUntilXNumber(0, 6));

const numeros = [0, 3, 2, 4, 7, 2, 424, 242, 4, 454, 2523, 423, 423,];
let contadro = 0;
for (let index = 0; index < numeros.length; index++){
    contadro = numeros[index]
    console.log({ index, contadro});
}


function recursividad(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0]
        console.log(firstNum);
        
        numbersArray.shift();
        recursividad(numbersArray)

    }
}
recursividad([3, '🚀', 4, 'rocket']);