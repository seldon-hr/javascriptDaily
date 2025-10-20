/* 
    875: Koko Eating Bananas
*/

var findMinimum = function (piles, h) {
    let left = 1
    let right = Math.max(...piles); //The max, wasn't the time, the largest number of bananas on a pile
                        /* we have to use spread operator */
    while (left != right) {
        let mid = Math.floor((left + right) / 2);
        
        
        //Here we have to compare (mid -1), due to know if there's a slower speed to match with time.
        let current = totalHours(piles, mid)
        if (current <= h) {
            //Find the minimum slower.
            right = mid;
        } else {
            //We need to go faster.
            left = mid + 1;
        }
    }
    
    return left;
}

function totalHours(piles, speed) {
    let sumTime = 0; //var to store the hours based on the speed
    //Calculate the total amount of time:
    for (const pile of piles) {
        let time = Math.ceil(pile / speed); //Divide the amount in speed
        sumTime += time;
    }

    return sumTime
}


console.debug(totalHours([3,6,7,11], 3));
console.debug(totalHours([3,6,7,11], 4));
console.debug(totalHours([3,6,7,11], 5));
console.debug(totalHours([3,6,7,11], 6));