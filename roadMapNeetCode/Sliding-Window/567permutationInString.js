var isTherePermutations = function (s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')

    
    let tracker = new Map()

    //Track each case of its appears of s1
    for (let counter = 0; counter < s1.length; counter++) {
        //Track each appears into a a map.
        tracker.set(s1[counter],( tracker.get(s1[counter]) || 0) + 1)
    }
    

    //Set a temporal window.
    let left = 0
    /* hint, when we have a length that not change, this is the
       window size = s1.length */
    let mapTemporal = new Map()
    //1. Add the first cases to the map how to do, with a loop? what's happen when you have a initial windows who is big in length
    /* Because in this first example the window is shorter, but it's not the same if i have s1 with length longer. */
    let counter = 0
    while (counter < s1.length - 1) {
        mapTemporal.set(s2[counter], (mapTemporal.get(s2[counter]) || 0) + 1)
        counter += 1
    }

    for (let right = s1.length - 1; right < s2.length; right++) {      
        //Here's need check this value are in this window.<<<
        
        //1. Add each new character to the map
        mapTemporal.set(s2[right], (mapTemporal.get(s2[right]) || 0) + 1)
        console.debug(`Window at position [${left},${right}], Map of the current window ->`);
        console.debug(mapTemporal);
        
        //2. Check if match the numbers for each one.
        /* we need to compare with the tracker */
        if (condition) {
            return true //if have the same values. Permutation
        } else {
        //3. delete the previous
            mapTemporal.get(s2[left]) - 1 //if was found, decrease, we are advanced.
            left += 1
        }
        
    }
    return false
}

console.debug(isTherePermutations('ab', 'eidbaooo'));
/* console.debug(isTherePermutations('ab', 'eidboaoo')); */