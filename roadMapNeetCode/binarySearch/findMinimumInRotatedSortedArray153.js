let nums = [3, 4, 5, 1, 2];
/* 153: Find minimum in rotated sorted array
    Own hints: La clave es encontrar una condición que determine como acutalizar
    left y right, con esto, esta condición nos acerca al valor del
    caso de binarySearch.
*/
var findMinimum = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left != right) {
        
        let mid = Math.floor((left + right) / 2);

        // Determinar en que lado se encuentra el mínimo
        if (nums[mid] > nums[right]) {
            // Mínimo en el lado derecho
            left = mid + 1;

        } else {
            // Mínimo en el lado izquierdo
            right = mid;
        }
    }
    return nums[left];
}

console.debug(findMinimum(nums));
console.debug(findMinimum([4, 5, 6, 7, 0, 1, 2]));
console.debug(findMinimum([11, 13, 15, 17]));