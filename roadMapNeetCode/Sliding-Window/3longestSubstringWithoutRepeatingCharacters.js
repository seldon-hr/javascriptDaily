var longestSubstring = function (s) {
    s = s.split('')
    let mapExisting = new Map()
    let left = 0
    let right = 1

    while (left < s.length) {

        //Store in map
        if (!mapExisting.get([[left],[right]])) {
            mapExisting.set([[left], [right]])
        }
        
        //Move almost always ->
        if (s[left] != s[right]) {
            right += 1
        } else {
        //Move when are duplicate
            left += 1
        }
    }
    console.debug(mapExisting);
}

console.debug(longestSubstring('abcabcbb'));