/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let index = 0;
//     /* Dentro de nuestro array lo recorremos por posiciones, para poder comparar cada uno
//     de sus valores, de forma que necesitamos dos apuntadores
//     index, el primer valor
//     secondIndex siempre apuntar a index + 1. Y reiniciar por cada nuevo valor que apunte index.
//     Cuando coinciden los valores, lo eliminamos, pero no incrementamos, porque usamos splice y este recorre el valor eliminado.
//     Entonces cuando no coincide, entonces si incrementamos secondIndex.
//     */
//     while (index < nums.length) {
//         let secondIndex = index + 1;
//         while (secondIndex < nums.length) {
//             if (nums[index] === nums[secondIndex]) {
//                 nums.splice(secondIndex, 1);
//             } else {
//                 secondIndex++
//             }
//         }
//         index++
//     }
    
//     return nums.length;
// };



/* 
El siguiente enfoque es con el uso de un contador
sobre aquellos números de cuántas veces esta.
Y como el primero número siempre es unícos, entonces podemos
contar desde que el valor que tenemos sea distinto al número anterior.
Todo esto porque los números ya están ordenados.

*/
var removeDuplicates = function(nums) {
    let index = 1;
    let noDuplicate = 1;
    while (index < nums.length) {
        if (nums[index] !== nums[index -1]) {
            nums[noDuplicate] = nums[index];
            noDuplicate++
        }
        index++
    }
    
    return noDuplicate;
};

let nums = [1,2,2];
console.debug(removeDuplicates(nums));