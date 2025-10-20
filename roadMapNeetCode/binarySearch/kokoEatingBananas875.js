/* 
    875: Koko Eating Bananas
*/

var findMinimum = function (piles, h) {
    let left = 1
    let right = h

    while (condition) {
        let mid = Math.floor((left + right) / 2);
        
        
        //Here we have to compare (mid -1), due to know if there's a slower speed to match with time.
        let current = totalHours(piles, mid)
        let previous = totalHours(piles, mid - 1)
        //Here we left something to compare against h, maybe the previous with.
        if (current <= previous) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return ;
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