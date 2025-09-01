/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

/* 
* SKETCH, boceto en proceso. Aún no comprendo este ejercicio.
Comprender antes de resolver en código.
 */
var duplicateZeros = function(arr) {
    let index = 1; //Empecemos uno adelante, vamos a comparar con el previo
    let counter = 0;
    while (index < arr.length) {
        if (arr[index] !== 0) {
            index += 1;
            continue
        } else {
            counter += 1
        }
        index += 1;        
    }

    let i = arr.length;
    let j = arr.length + counter; //índice teórico
    while (i > 0) {
        if (arr[i] === 0) {
            if (j > arr.length) {
                j -= 1
                continue
            } else {
                //Mover ambos
                i -= 1
                j -= 1
            }
        } else {
            
        }


        i += 1
    }



    return counter;
};



console.debug(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));