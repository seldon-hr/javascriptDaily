var isTherePermutations = function (s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')

    let left = 0
    let tracker = new Map()

    //Track each case of its appears of s1
    for (let counter = 0; counter < s1.length; counter++) {
        //Track each appears into a a map.
        tracker.set(s1[counter],( tracker.get(s1[counter]) || 0) + 1)
    }
    

    for (let right = s1.length - 1; right < s2.length; right++) {
        //Add the s2[right] to window

        while (/* while s1.length quepa dentro de la window. */) {

            if (condition) {
                return true
            } else {
                //Remove the s2[left]
                left += 1
            }

        }
    }
    return false
}

console.debug(isTherePermutations('abca', 'abdc'));