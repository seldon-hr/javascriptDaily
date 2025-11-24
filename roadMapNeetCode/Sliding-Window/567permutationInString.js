var isTherePermutations = function (s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')

    let left = 0
    let right = s1.length - 1
    let tracker = new Map()

    //Track each case of its appears of s1
    for (let counter = 0; counter < s1.length; counter++) {
        //Track each appears into a a map.
        tracker.set(s1[counter],( tracker.get(s1[counter]) || 0) + 1)
    }
    
    

    return tracker
}

console.debug(isTherePermutations('aba', 'eidbaooo'));
console.debug(isTherePermutations('ab', 'eidboaoo'));