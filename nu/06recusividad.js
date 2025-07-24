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
console.debug(printUntilXNumber(0,6));