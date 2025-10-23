/* 
    18: 4sum

*/

var fourSum = function (nums, target) {
    let arrayCases = []

    nums.sort((a, b) => a - b)
    
    for (let set = 0; set < nums.length - 3; set++) {

        if(set > 0 && nums[set] === nums[set - 1]) continue
        
        for (let setSecond = set + 1; setSecond < nums.length - 2; setSecond++) {
            
            if (setSecond > set + 1 && nums[setSecond] === nums[setSecond - 1]) continue
            

            let left = setSecond + 1
            let right = nums.length - 1
            
            while (left < right) {
                let sum = nums[set] + nums[setSecond] + nums[left] + nums[right];
                
                if (sum === target) {
                    arrayCases.push([nums[set], nums[setSecond], nums[left], nums[right]])
                    
                    //Move right and left
                    left += 1
                    right -= 1

                    while(left < right && nums[left] === nums[left - 1]) left += 1
                    while(left < right && nums[right] === nums[right + 1]) right -= 1


                } else if (sum < target) {
                    left += 1
                } else {
                    right -= 1
                }
            }
        }

    }
    return arrayCases;
}

console.debug(fourSum([1, 0, -1, 0, -2, 2], 0));
console.debug(fourSum([2, 2, 2, 2, 2], 8));