
var minimumSize = function (nums, target) {
    let left = 0
    let currentSum = 0;
    let minLength = Infinity

    for (let right = 0; right < nums.length; right++) {
        //Add  nums[right] to window
        currentSum += nums[right]

        //Valid window.
        while (currentSum >= target) {
            //Try to minimize: update minLength

            minLength = Math.min(minLength, right - left + 1)

            currentSum -= nums[left]
            left += 1
        }

    }
    return minLength === Infinity ? 0 : minLength
}


console.debug(minimumSize([2,3,1,2,4,3],7));