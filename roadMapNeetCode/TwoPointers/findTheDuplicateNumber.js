/* 
    278: Find the Duplicate Number

    Own hint: Fast and slow pointers
*/

var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    //First phase
    //The pointers match
    do {
        //First move
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast);

    //Second phase
    slow = 0
    while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
    }

    return slow;
}


console.debug(findDuplicate([1,3,4,2,2]));
console.debug(findDuplicate([3,1,3,4,2]));
console.debug(findDuplicate([3,3,3,3,3]));