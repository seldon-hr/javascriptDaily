/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    
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