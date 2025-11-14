
var longestRepeating = function (string, k) {
    string = string.split('')
    let maxSubString = 0
    let maxFrequent = 0 //Character more repetead.
    let left = 0

    let hash = {}

    for (let right = 0; right < string.length; right++) {


        //Update charCount as new character or add on if exists.
        hash[string[right]] = (hash[string[right]] || 0) + 1
        //Update maxFrequent as was finded.
        maxFrequent = Math.max(maxFrequent, hash[string[right]]) //Updates incrementaly


        //Consider that a window is valid.
        let range = (right - left + 1) - maxFrequent
        //Shrink the window, is not valid.
        while (range > k) {
            hash[string[left]]-=1
                left += 1        
            range = (right - left + 1) - maxFrequent //Recalculate
        }
        //Update maxSubString
        maxSubString = Math.max(maxSubString, right - left + 1)

    }
    return maxSubString;
}