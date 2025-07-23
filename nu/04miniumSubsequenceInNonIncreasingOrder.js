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

        function suma(element) {
            visited.push(element); 
            acumulador = acumulador + element;
            restoNumeros.shift(element);
        }

        let sumaRestante = restoNumeros.reduce((sum, item) => sum = item + sum, 0);
        console.debug('Suma mayor:', acumulador, 'Suma de restantes:', sumaRestante)
        if (!(acumulador > sumaRestante)) {
            suma(numero);
        }
    });

    return visited;
};
console.debug(minSubsequence(nums));
console.debug(minSubsequence(nums2));