var fixedWindowTemplate = function (s1, s2) {
    //Convert s1, s2 to arrays


    //Store the mapBase
    let mapBase = new Map()
    for (let count = 0; count < s1.length; count++) {
       mapBase.set(s1[count], mapBase.get(s1[count]) || 0 ) + 1
    }

    //Fill the window with first elements
    let mapTemp = new Map()
    let counter = 0
    while (counter < s2.length - 1) {
        mapTemp.set(s2[counter], mapTemp.get(s2[counter]) || 0) + 1
        counter += 1
    }

    //Main loop
    let left = 0
    for (let right = s1.length - 1; right < s2.length; right++) {
        //Add the value
        mapTemp.set(s2[right], mapTemp.get(s2[right]) || 0) + 1
        
        //Compare
        if (compareMaps(mapBase, mapTemp)) {
            //Logic about problem
            //Affect vaLProblem o something like that.
        }
        
        //Delete or decrease
        let currentVal = mapTemp.get(s2[left])
        if (currentVal === 1) {
            mapTemp.delete(s2[left])
        } else {
            mapTemp.set(s2[left], currentVal - 1)
        }

        //Always advanced left, as right
        left += 1
    }
    //return based on the logic about problem
    return valProblem
}