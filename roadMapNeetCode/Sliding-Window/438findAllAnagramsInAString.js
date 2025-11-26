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
    let left = 0
    let tempMap = new Map()
    // Add the first characters of the iteraion
    let counter = 0
    while (counter < p.length - 1) {
        tempMap.set(s[counter], (tempMap.get(s[counter]) || 0) + 1)
        counter += 1
    }
    
    //Main loop to iterate in each case
    for (let right = p.length - 1; right < s.length; right++) {

        //Add first, each new character, then compare
        tempMap.set(s[right], (tempMap.get(s[right]) || 0) + 1)

        //Compare if they are equal
        if (compareMaps(trackerP, tempMap)) {
            anagramsIndexes.push(left) //left still our start or where sliding windows starts.
        }
        
        let currentValue = tempMap.get(s[left])
        if (currentValue === 1) {
            tempMap.delete((s[left]))
        } else {
            tempMap.set(s[left], currentValue - 1)
        }
        //Always advanced left, becaus always is advancing right.
        left += 1
        
    }


    return anagramsIndexes
}


console.debug(findAnagrams('cbaebabacd', 'abc'));

function compareMaps(map1, map2) {
    
    if (map1.size !== map2.size) {
        return false
    }

    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            return false
        } 

        if (value !== map2.get(key)) {
            return false
        }
    }

    return true
}