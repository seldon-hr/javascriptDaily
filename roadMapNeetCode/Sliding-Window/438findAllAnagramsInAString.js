var findAnagrams = function (s, p) {
    //Have all the permutations of p
    p = p.split('')
    s = s.split('')
    let trackerP = new Map()
    for (let counter = 0; counter < p.length; counter++) {
        trackerP.set(p[counter], (trackerP.get(p[counter]) || 0) + 1)
    }


    let anagramsIndexes = []
    //The size of the window is constant => p.length - 1
    let tempMap = new Map()
    // Add the first characters of the iteraion
    let left = 0
    while (left < p.length - 1) {
        tempMap.set(s[left], (tempMap.get(s[left]) || 0) + 1)
        left += 1
    }
    
    //Main loop to iterate in each case
    for (let right = p.length - 1; right < s.length; right++) {

        //Add first, each new character, then compare
        tempMap.set(s[right], (tempMap.get(s[right]) || 0) + 1)

        //Compare if they are equal
        if (compareMaps(trackerP, tempMap)) {
            anagramsIndexes.push() //How add the first index, maybe before needs a first comparision
        } else {
            let currentValue = tempMap.get(s[right])
            if (currentValue === 1) {
                tempMap.delete(tempMap(s[right]))
            } else {
                tempMap.set(tempMap(s[right]), currentValue - 1)
            }
        }
        
    }


    return anagramsIndexes
}


console.debug(findAnagrams('cbaebabacd', 'abc'));