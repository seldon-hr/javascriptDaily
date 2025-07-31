/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    /* Dentro de nuestro array lo recorremos por posiciones, para poder comparar cada uno
    de sus valores, de forma que necesitamos dos apuntadores
    index, el primer valor
    secondIndex siempre apuntar a index + 1. Y reiniciar por cada nuevo valor que apunte index.
    Cuando coinciden los valores, lo eliminamos, pero no incrementamos, porque usamos splice y este recorre el valor eliminado.
    Entonces cuando no coincide, entonces si incrementamos secondIndex.
    */
    while (index < nums.length) {
        let secondIndex = index + 1;
        while (secondIndex < nums.length) {
            if (nums[index] === nums[secondIndex]) {
                nums.splice(secondIndex, 1);
            } else {
                secondIndex++
            }
        }
        index++
    }
    
    return nums.length;
};

let nums = [1,2,2];
console.debug(removeDuplicates(nums));