 /*
    The key here is to know how the sliding window is going to be expanding.
For this, two nested loops, for and while; right almost always advanced (for), while left advanced in special cases (while). 
 */
var longestSubstring = function (s) {
    s = s.split('')
    let mapExisting = new Set()
    let left = 0
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        //While s[right] is already in the window(duplicate)
        
        while (mapExisting.has(s[right])) {
            mapExisting.delete(s[left]) //it's the same 
            left += 1
        }

        //Add s[right] it wasn't a duplicate
        mapExisting.add(s[right])
        
        //Update maxLength
        let currentLength = right - left + 1 //discount where's start to count.
        maxLength = Math.max(maxLength, currentLength)      
    }   
    return maxLength
}

console.debug(longestSubstring('abcabcbb'));
console.log(longestSubstring("bbbbb"));   
console.log(longestSubstring("pwwkew"));