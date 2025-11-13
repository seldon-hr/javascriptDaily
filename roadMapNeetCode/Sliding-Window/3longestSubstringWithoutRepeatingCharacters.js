var longestSubstring = function (s) {
    s = s.split('')
    let mapExisting = new Set()
    let left = 0
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        //Expanding window by adding s[right]
        mapExisting.add(s[right])

        while (left < s.length && s[left] === s[right]) {

            if (mapExisting.get(s[right])) {
                mapExisting.delete(s[left]) //it's the same
            }

            left += 1
        }
        
        //Update maxLength
        let currentLength = right - left
        maxLength = Math.max(maxLength, currentLength)      
    }   
    return maxLength
}

console.debug(longestSubstring('abcabcbb'));