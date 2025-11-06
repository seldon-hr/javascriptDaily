/* 
    278: Find the Duplicate Number

    Own hint: Fast and slow pointers
*/

var findDuplicate = function (nums) {
    let slow = 0;
    let fast = slow + 1;

    while (fast < nums.length) {
        if (nums[slow] === nums[fast]) {
            return nums[slow]
        } else {
            slow += 1
        }
    }
}


console.debug(findDuplicate([1,3,4,2,2]));
console.debug(findDuplicate([3,1,3,4,2]));
console.debug(findDuplicate([3,3,3,3,3]));