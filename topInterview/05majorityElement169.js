/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let index = 0;
    let mapa = new Map();
    while (index < nums.length) { 
        if (mapa.has(nums[index])) {
            let val = mapa.get(nums[index]);
            val += 1
            mapa.set(nums[index], val);
        } else {
            mapa.set(nums[index], 1);
        }
        index++
    }
    console.log(mapa)
    let biggest = 0;
    let mostNumbers = 0;
    mapa.forEach((val, key) => { 
        if (val > biggest) {
            biggest = val;
            mostNumbers = key;
        }
    })
    return mostNumbers
};


console.debug(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.debug(majorityElement([3, 2, 3]));