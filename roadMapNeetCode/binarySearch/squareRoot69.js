/* 
    69: Square root of a number:

*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x === 1 || x === 0 ? x : x -1
    /* 
     right = x === 1 || x === 0 ? x : x -1
     That's also works, the point, if we don't have a square root equal
     to x, except for 0 or 1 cases, for that, before
     we had that ternary, instead right = x, works in all cases.
     */

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let product = mid * mid;  
        if (product === x) {
            return mid;
        } else if (product > x) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};


console.debug(squareRoot(4));
console.debug(squareRoot(8));
console.debug(squareRoot(16));
console.debug(squareRoot(1));