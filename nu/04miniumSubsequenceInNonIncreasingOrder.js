let nums = [4, 3, 10, 9, 8];
let nums2 = [4, 4, 7, 6, 7];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    const orderDesc = nums.sort((a, b) => b - a);
    let acumulador = 0;
    let visited = [];
    let restoNumeros = JSON.parse(JSON.stringify(orderDesc));
    orderDesc.forEach((numero) => {

        let sumaRestante = restoNumeros.reduce((sum, item) => sum = item + sum, 0);
        if (!(acumulador > sumaRestante)) {
            visited.push(numero); 
            acumulador = acumulador + numero;
            restoNumeros.shift(numero);
        }
    });

    return visited;
};
console.debug(minSubsequence(nums));
console.debug(minSubsequence(nums2));