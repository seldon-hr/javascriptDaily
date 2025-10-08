let nums = [3, 4, 5, 1, 2];

var findMinimum = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2);

        // Determinar si fue rotado
        
        
        if (nums[left] > nums[mid + 1]) {
            // Rotado
            return nums[mid + 1];



        } else {
            // No fue rotado: caso edge
            return nums[0];
        }
    }
}

console.debug(findMinimum(nums));
console.debug(findMinimum([4, 5, 6, 7, 0, 1, 2]));
console.debug(findMinimum([11, 13, 15, 17]));