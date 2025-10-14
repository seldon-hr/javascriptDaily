/* 
    852: Peak index in a Mountain Array
*/
var findPeak = function(nums){

    let left = 0
    let right = nums.length - 1

    while (left != right) {
        let mid = Math.floor((left + right) / 2)
        //When the mid is less than the right neighbor, means the peak it's in the right side
        //we move the left, when the mid is greater than left neighbor, move to the left side.
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

console.debug(findPeak([0,1,0]));
console.debug(findPeak([0,2,1,0]));
console.debug(findPeak([0,10,5,2]));
console.debug(findPeak([3,5,3,2,0]));
console.debug(findPeak([0,3,5,4,1]));
