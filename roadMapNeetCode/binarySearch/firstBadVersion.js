/* 
248: First Bad version, Usgin external isBadVersion as API
 Here we have optimization, justo one call to the API, different to the
 previouse one, when we use two calls.
*/
var findBadVersion = function (n) {
    let left = 1
    let right = n

    while (left != right) {
        /* Here, when the loop ends, converge on the same position */
        let mid = Math.floor((left + right) / 2)
        let typeVersion = isBadVersion(mid);

        if (typeVersion) {
            // Bad version
            right = mid;
        } else {
            // Good version
            left = mid + 1
        }

    }
    return left; //we have to check.
}