/* 
    454: 4sum II
    Four arrays, have n lenght
    return number of tuples such that:
    nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/

var fourSum = function(nums1, nums2, nums3, nums4){

    //Store all sums from nums1 + nums2
    let mapSums = new Map();

    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const element2 = nums2[j];
            
            //Let's add the sum to the map
            let sum = element + element2
            if (!mapSums.has(sum)) {
                mapSums.set(sum, 1);
            } else {
                mapSums.set(sum, mapSums.get(sum) + 1)
            }
        }
    }

    let count = 0;

    //Now with the next two arrays
    //For each sum from nums3 + nums4, check if opposite exits
    for (let k = 0; k < nums3.length; k++) {
        const element3 = nums3[k];
        for (let l = 0; l < nums4.length; l++) {
            const element4 = nums4[l];
            
            let sum = element3 + element4;
            
            //As we need to sum equal to 0, so we need the rest of the target = 0 - sum
            let target = 0 - sum;

            if (mapSums.has(target)) {
                count += mapSums.get(target) //Add the numbers of times in mapSums we have that scencarios, becuase here doesn't matter if ther'es no repeat cases.

            }

        }
    }
    return count;
}

let nums1 = [1,2]
let nums2 = [-2,-1]
let nums3 = [-1,2]
let nums4 = [0,2]
console.debug(fourSum(nums1, nums2, nums3, nums4));
console.log(fourSum([0], [0], [0], [0])); 