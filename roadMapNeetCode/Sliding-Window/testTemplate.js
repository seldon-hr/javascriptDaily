var tempalte = function(range, considerations) {
    let left = 0
    let tracker = new Set() // new Map(), {}, 0 counter
    let varToReturn = 0

    //outer loop for expand the window
    for (let right = 0; right < range.length; right++) {
        //know where to add range[right] to tracker
        //Before or after the inner loop
        
        //Inner loop; shrink the range[left]
        while (/* considerations */) {
            //delete range[left]
            left += 1
        }

        //Update varToreturn depends on the cass, outside inner loop
        //or inside the inner loop

    }
    //return varToReturn
}