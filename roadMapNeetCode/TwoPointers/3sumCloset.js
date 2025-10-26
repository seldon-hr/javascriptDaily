/* 
    3sum closet reviewing:

    Own hints: 
     - the key is when the pointers end, it's means
    when the condition of left and right was crossed, so fin the 
    closest case.


*/


var threeSumCloset = function(nums, target) {

    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let set = 0; set < nums.length; set++) {
        
        let left = set + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[set] + nums[left] + nums[right];

            ///Use the absolute case to determine if is closest than the previous sum
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            } 


            
            if(sum < target){
                left += 1
            }
            else if(sum > target){
                right -= 1
            } else {
                //The closest is the match, so return
                return sum
            }
        }
    }
    return closestSum;
}

console.debug(threeSumCloset([-1, 2, 1, -4], 1));