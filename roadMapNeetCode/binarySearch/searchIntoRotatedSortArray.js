let nums = [4, 5, 6, 7, 0, 1, 2];
/* Un array sorted que fue rotado en algún lugar, con esto
    determinar si el target se encuentra, devolver el índice, de lo
    contrario devolver -1.
*/

var searchIntoRotatedSortArray = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        //Caso edge en primera iteración, después comprueba si es el valor.
        if (nums[mid] === target) {
            return mid;
        }


        //Determinar parte ordenada
        if (nums[left] <= nums[mid]) {
            //Lado izquierdo ordenado

            //Corroborar que este dentro del rango
            if (nums[left] <= target && target <= nums[mid]) {
                //Buscar a la izquierda
                right = mid - 1;
            } else {
                //Buscar a la derecha
                left = mid + 1;
            }

        } else {
            //Lado derecheo ordenado

            //Corroborar que este dentro del rango
            if (nums[mid] <= target && target <= nums[right]) {
                //Buscar a la derecha
                left = mid + 1;
            } else {
                //Buscar a la izquierda
                right = mid - 1;
            }
        }
    }
    return -1;
}

console.debug(searchIntoRotatedSortArray(nums, 0));
console.log(searchIntoRotatedSortArray([4,5,6,7,0,1,2], 0));  // debería dar 4
console.log(searchIntoRotatedSortArray([4,5,6,7,0,1,2], 3));  // debería dar -1
console.log(searchIntoRotatedSortArray([4,5,6,7,0,1,2], 5));  // debería dar 1
console.log(searchIntoRotatedSortArray([4,5,6,7,0,1,2], 7));  // debería dar 3