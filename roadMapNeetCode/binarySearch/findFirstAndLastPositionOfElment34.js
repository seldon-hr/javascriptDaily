let nums = [-1, 0, 3, 5, 9, 12];
var searchRange = function (nums, target) {

    
    
    return -1;
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





console.debug(findNumber(nums, 9));