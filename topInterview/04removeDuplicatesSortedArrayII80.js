// var removeDuplicates = function(nums){
//     let index = 0;
//     while (index < nums.length) {
//         let secondIndex = index + 1;
//         let thirdIndex = secondIndex + 1;
//         if (nums[index] === nums[secondIndex] && nums[index] === nums[thirdIndex] && nums[secondIndex] === nums[thirdIndex]) {
//             nums.splice(thirdIndex, 1);
//         } else {
//             index++;
//         }
//     }
//     return nums.length;
// }

// /* let nums = [1,1,1,2,2,3];
// console.debug(removeDuplicates(nums)); */

// let nums = [1,1,1,1,2,2,3,3,3];
// let k = removeDuplicates(nums);
// console.log(k);               // Esperado: 7
// console.log(nums.slice(0, k)); // Esperado: [1,1,2,2,3,3]




/* Con uso de dos punteros, e ir acumulando. */
let nums = [1,1,1,2,2,3];
var removeDuplicates = function (nums) {
    let index = 2;
    let writeIndex = 2;
    while (index < nums.length) {
        /* Falló que cheque, estaba comparando contra índice nums[index -2]
        en vez de que fuera con nums[writeIndex -2], esto porque, el tercer valor del array
        se va a comparar con el primer valor, en su priemera iteración
            nums[index] !== nums[writeIndex -2]
            index = 2 | writeIndex = 2 | 1 !== 1 → array [1,1,1,2,2,3]
            index = 3 | writeIndex = 3 | 1 !== 1 → array [1,1,1,2,2,3]
            index = 4 | writeIndex = 4 | 4 !== 1 → array [1,1,1,2,2,3]
            index = 5 | writeIndex = 5 | 3 !== 2 → array [1,1,1,2,2,3]
            index = 6 | writeIndex = 6 | return;

            se observa que el valor que se coloca, termina ocupando su mismo valor, solo que contamos dos unidades con valores únicos.

        */
        if (nums[index] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[index]
            writeIndex++
        }
        index++
    }
    return writeIndex;
}


console.debug(removeDuplicates(nums));
