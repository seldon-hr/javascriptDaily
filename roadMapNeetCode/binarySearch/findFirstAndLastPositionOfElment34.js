let nums = [5,7,7,8,8,10];
var searchRange = function (nums, target) {

    const first = findFirst(nums, target);
    const last = findLast(nums, target);

    //Casos edge
    if (first >= 0 &&
        first <= nums.length - 1 &&
        last >= 0 &&
        last <= nums.length - 1 &&
        nums[first] === target &&
        nums[last] === target) {
        return [first, last];
    } else {
        return [-1, -1]
    }
}

function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] >= target) {
            right = mid - 1
        } else  {
            left = mid + 1
        }
    }
    
    return left;
}

function findLast(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] <= target) {
           left = mid + 1
        } else {
            right = mid -1
        }
    }
    
    return right;
}





console.log(searchRange(nums, 8));   // debería dar [3, 4]
console.log(searchRange(nums, 6));   // debería dar [-1, -1]
console.log(searchRange(nums, 10));  // debería dar [5, 5]
console.log(searchRange([], 0));     // debería dar [-1, -1]