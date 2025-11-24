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
    /* hint, use just one pointer, when we have a length that not change, this is the
       window size = s1.length */
    let mapTemporal = new Map()
    for (let right = s1.length - 1; right < s2.length; right++) {
        //.         ⬆️ starts at the s1.length.
        console.debug(`Window at position [${left},${right}]`);

        //Here's need check this value are in this window.
        //1. Add the value to the mapTemporal
            mapTemporal.set(s2[right], (mapTemporal.get(s2[right]) || 0) + 1)
        //2. Check if match the numbers for each one.
            
        left += 1
    }
    

    return tracker
}

console.debug(isTherePermutations('aba', 'eidbaooo'));
/* console.debug(isTherePermutations('ab', 'eidboaoo')); */