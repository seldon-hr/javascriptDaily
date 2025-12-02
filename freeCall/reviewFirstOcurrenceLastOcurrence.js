/* 
    Active recall after time about the exercise: 
    34: Find First and last position of element is sorted array.

    Own hints: Search binary search for each ocurrence,
        one for first, one for the last.
*/

var firstAndLast = function (nums, target) {
    //First occurrence
    let first = findFirst(nums, target)
    let last = findLast(nums, target)
    return [first, last]
}


function findFirst(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] >= target) {
            right = mid //Search to the left
        } else {
            left = mid  + 1 //Search to the right
        }
    }

    return nums[left] == target ? left : -1
}
/* Total opposite way to findLast against the findFirst
    mid; round up to find middle
    update: left = mid to considerer mid as case
    the update is opposite. 
*/
function findLast(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        //With this need to round up
        let mid = Math.ceil((left + right) / 2) //Math.floor((left + right + 1) / 2) 

        if (nums[mid] <= target) {
            left = mid //Search to the right
        } else {
            right = mid  - 1 //Search to the left
        }
    }

    return nums[right] == target ? right : -1
}

console.debug(firstAndLast([5,7,7,8,8,10], 8));