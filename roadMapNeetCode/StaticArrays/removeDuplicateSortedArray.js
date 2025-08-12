/* Remove with hash */
var removeDuplicateSortedArray = function (nums) {
    let set = new Set();
    let index = 0;
    while (index < nums.length) {
        
        if (!set.has(nums[index])) {
            set.add(nums[index]);
        }

        index++
    }
    return set.size;
}

/* However, w hav to count without that. */
var removeDuplicateSortedArray = function (nums) {
    let k = 0;
    let index = 0;
    while (index < nums.length) {
        


        index++
    }
    return k;
}

console.debug(removeDuplicateSortedArray([1, 1, 2, 3, 4]));
console.debug(removeDuplicateSortedArray([2,10,10,30,30,30]));