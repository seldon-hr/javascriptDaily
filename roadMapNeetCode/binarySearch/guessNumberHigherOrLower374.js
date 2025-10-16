/*  */

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