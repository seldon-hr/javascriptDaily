/* 35: Search Insert Position
    Own hints:
    - Usar left and right. Solo corroboramos con el número de posicions que left será 
    donde se encuentre el patrón del índice a devolver.
    Esto cuando termine el loop.
*/

let nums = [1, 3, 5, 6];
var searchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        
        if (nums[mid] === target) {
            return mid;
        } else {
            if (nums[mid] < target) {
                //Incrementamos el valor de la misma forma que binaySearch
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    /* Sí el valor no es encontrado en el array, este siguiendo el patrón, se colocará en 
    el índice que debe estar dentro de left, señalaría cual sería su posición conforeme
    al orden. */
    return left;
}


console.debug(searchInsert(nums, 0));
console.debug(searchInsert(nums, 2));
console.debug(searchInsert(nums, 7));