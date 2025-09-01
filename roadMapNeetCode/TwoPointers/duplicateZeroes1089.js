/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 1; //Empecemos uno adelante, vamos a comparar con el previo
    let counter = 0;
    while (i < arr.length) {
        if (arr[i] !== 0) {
            i += 1;
            continue
        } else {
            counter += 1
        }
        i += 1;        
    }

    return counter;
};



console.debug(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));