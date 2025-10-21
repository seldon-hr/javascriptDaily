/* 
    3 sum, this is the pattern,
    I resolved time ago, but let's to analyze better how this Nsum works.

    Return all the triplets where the sum of this numbers is equal to 0.
    Own hints:
        - We have to set a number and check two more with same direction, i and j
        - First sketch, we left how not repeat them.
        - Also left the edge cases, when the first after sorted wasn't a negative number.
    */
/* First try */   
var threeSum = function (nums) {
    let set = 0;
    let arrayAnswers = [];
    
    while (set < nums.length) {

        for (let i = 1; i < nums.length; i++) {
            let j = i + 1;
            
            let sum = nums[set] + nums[i] + nums[j];

            if (sum === 0) {
                arrayAnswers.push([nums[set], nums[i], nums[j]]);
            }
            
        }
        set += 1;
    }

    return arrayAnswers;
}

console.debug(threeSum([-1,0,1,2,-1,-4]));