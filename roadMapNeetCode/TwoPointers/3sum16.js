let nums = [-1, 2, -1, -4];


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let numsSort = nums.sort((a,b) => a - b);
    let bestSum;
    let set = 0;
    while(set < numsSort.length){
        let fijado = nums[set];
        let left = set + 1;
        let right = numsSort.length -1;

        while(left < right){
            let sum =  fijado + (nums[left] + nums[right]);
             
             if(sum === 0){
                //Significa que encontramos una suma igual al target.
                return sum;
             }

             bestSum = sum < bestSum ? sum : bestSum;
             left++
        }
        set++
    }
    return bestSum;
};