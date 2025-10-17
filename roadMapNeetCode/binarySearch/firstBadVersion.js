/* 
248: First Bad version

*/
var findBadVersion = function (n) {
    let left = 1
    let right = n

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let typeVersion = isBadVersion(mid);

        if (typeVersion) {
            // Bad version
            
            if (isBadVersion(mid - 1)) {
                //Bad version previous one too
                right = mid - 1 //I think also could be mid -2, here we checke one.
            } else {
                //Previouse one is a good version.
                return mid
            }

        } else {
            // Good version
            left = mid + 1
        }

    }

    return left; //we have to check.
}