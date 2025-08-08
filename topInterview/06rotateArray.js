/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length; //normalizar 

    function reverse(index, indexDecrase) {
        while (index < indexDecrase) {
            [nums[index], nums[indexDecrase]] = [nums[indexDecrase], nums[index]];
    
            index++
            indexDecrase--
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    return nums;
};

console.debug(rotate([1,2,3,4,5,6,7],3));
