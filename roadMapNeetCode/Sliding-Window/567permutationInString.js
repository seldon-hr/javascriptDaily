var isTherePermutations = function (s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')

    let left = 0
    let tracker = new Map()

    for (let counter = 0; counter < s1.length; counter++) {
        //Track each appears into a a map.
        tracker.set(s1[counter],( tracker.get(s1[counter]) || 0) + 1)

    }
    return tracker;

    /* for (let right = 0; right < range.length; right++) {

        while () {

            left += 1
        }


    }
    return false */
}

console.debug(isTherePermutations('abca', 'abdc'));