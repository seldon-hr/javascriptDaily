/* 
    278: Find the Duplicate Number

    Own hint: Fast and slow pointers
*/

var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    //First move
    slow = nums[0]
    fast = nums[nums[0]]

    while (/* slow != fast */) { //condition left
        if (slow === fast) {
            return nums[fast]
        } else {
            slow = nums[slow]
            fast = nums[nums[fast]]
        }
    }
}


console.debug(findDuplicate([1,3,4,2,2]));
console.debug(findDuplicate([3,1,3,4,2]));
console.debug(findDuplicate([3,3,3,3,3]));