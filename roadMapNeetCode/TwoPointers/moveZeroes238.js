/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let k = 0;
    while(i < nums.length){
        if(nums[i]!== 0){
            nums[k] = nums[i];
            k++
        }
        i++
    }

    let index = k; //Restante de hasta donde ya no hubo zeros.
    while(index <  nums.length){
        nums[index] = 0;
        index++
    }

    return nums;
};