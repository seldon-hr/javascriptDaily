/*  
    * The key here is we have and external api called guess(num),
   * which whose say if the number is higher or lower than our mid number.
   * here we don't do the comparsion, only we  the result:
   * 
   * If valueResult === 0 → return the answer
    *If valueResult > 0 (picked number is higher) → search right: left = mid + 1
    *If valueResult < 0 (picked number is lower) → search left: right = mid - 1
*/
var guessNumber = function (n) {
    let left = 1
    let right = n

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let valueResult = guess(mid)
        if (valueResult === 0) {
            return mid;
        } else if (valueResult > 0) { //Also could be valueResult === 1
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}