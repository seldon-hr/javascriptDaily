/* Sum the array by the use of spreadoperator that generate a new copy of the nums array. */
// Solución recomendada:
/* var getConcatenation = function (nums) { 
    return [...nums, ...nums];
}; */

// Solución alternativa con un bucle que funciona:

var getConcatenation = function (nums) {
    const originalLength = nums.length;
    for (let i = 0; i < originalLength; i++) {
        // Añade cada elemento del array original al final del mismo.
        nums.push(nums[i]);
    }
    return nums;
}


console.debug(getConcatenation([1,2,1]));
console.debug(getConcatenation([1,3,2,1]));