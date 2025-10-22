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
/* var threeSum = function (nums) {
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
} */

/* Second try */
var threeSum = function (nums) {
    let arrayAnswers = [];

    nums.sort((a, b) => a - b)

    //Edge cases
    if (nums[0] > 0) {
        return []
    }

    for (let set = 0; set < nums.length - 2; set++) {

       // Avoid duplicates, when the value is equal, jump the fixed value if was the same the previous case.
        if (set > 0 && nums[set] === nums[set - 1]) {
            continue
        }

        let left = set + 1;
        let right = nums.length - 1; 

        while (left < right) {
            let sum = nums[set] + nums[left] + nums[right];

            if (sum === 0) {
                arrayAnswers.push([nums[set], nums[left], nums[right]]);

                //Move pointers because they equal, avoid store duplicates.
                left += 1;
                right -= 1;

                //Increment the value left and right, these could be equal.
                while (left < right && nums[left] === nums[left - 1]) { //I left to put the contion to not break the boundaries
                    left += 1
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right -= 1
                }


            } else if(sum < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return arrayAnswers;
}

console.debug(threeSum([-1,0,1,2,-1,-4]));