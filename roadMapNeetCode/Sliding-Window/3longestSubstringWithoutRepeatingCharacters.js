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
            /* Here, enters for the first time when we have a character
            who stored previously, then delete that case, but now who expands,
            delete the previous one, both are they same, and we check that case before
            and we know its length. The windows moves.
            Happens from this temporal window:
                [a, b, c, a, b, c, b, b]
                ⬆️       ⬆️
                left.    right
              */
            mapExisting.delete(s[left]) 
            left += 1
            /* 
            to this:
                [a, b, c, a, b, c, b, b]
                   ⬆️    ⬆️
                 left.   right
            without repeating character. in the momwent we delete in the left, we advanced left.    
            */
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