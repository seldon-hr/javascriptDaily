var removeDuplicates = function(nums){
    let index = 0;
    while (index < nums.length) {
        let secondIndex = index + 1;
        let thirdIndex = secondIndex + 1;
        if (nums[index] === nums[secondIndex] && nums[index] === nums[thirdIndex] && nums[secondIndex] === nums[thirdIndex]) {
            nums.splice(thirdIndex, 1);
        } else {
            index++;
        }
    }
    return nums.length;
}

/* let nums = [1,1,1,2,2,3];
console.debug(removeDuplicates(nums)); */

let nums = [1,1,1,1,2,2,3,3,3];
let k = removeDuplicates(nums);
console.log(k);               // Esperado: 7
console.log(nums.slice(0,k)); // Esperado: [1,1,2,2,3,3]
