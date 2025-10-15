/* 
    69: Square root of a number:

*/
var squareRoot = function(x) {
    let left = 0;
    let right = x;

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
}


console.debug(squareRoot(4));
console.debug(squareRoot(8));
console.debug(squareRoot(16));
console.debug(squareRoot(1));