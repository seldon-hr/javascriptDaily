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
        console.debug('The situation: slow', slow, 'fast', fast);
        /* 
            It'll arrive a moment where find a cycle, and asign a number but after the operation
            return at the same number. That's important the below condition
            Check example 1.
        */
    } while (slow !== fast);

    console.debug('Second Phase');
    //Second phase
    slow = 0
    while (slow !== fast) {
            slow = nums[slow]
            fast = nums[fast]
    }

    return slow;
}

/* Example 1 */
console.debug(findDuplicate([1, 3, 4, 2, 2]));
/*  
    First Phase: loop 1
    1: do (At least one time)
        slow = nums[slow] = nums[0] = 1
        fast = nums[nums[fast]] = nums[nums[0]] = nums[1] = 3
        1 != 3 ? continue loop : finish
    2: 
        slow = 3
        fast = 4
        3 != 4 -> continue
    3:
        slow = 2
        fast = 4
        2 != 4 -> continue
    4:
        slow = 4
        fast = 4
        4 != 4 -> finish loop, they are equal.
    
    However, if you notice, the fast pointer was stucked in 4, since the second iteration.
    That's the key. It'll arrive the moment where fast is stuckec, and slow needs to reach.
*/

/* console.debug(findDuplicate([3,1,3,4,2]));
console.debug(findDuplicate([3,3,3,3,3])); */