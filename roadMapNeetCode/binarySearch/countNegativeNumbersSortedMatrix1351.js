/* 
    1351: Count Negative Numbers in a Sorted Matrix

    Own hints:

*/

var countNegatives = function (grid) {
    let totalCount = 0

    for (const row of grid) {
        let firstNegative = binarySearchFirstNegative(row);

        let totalNegativeRow = row.length - firstNegative;

        totalCount += totalNegativeRow;

    }
    return totalCount;
}

function binarySearchFirstNegative(row) {
    let left = 0
    let right = row.length; //When is not negative ensure the the sustraction make bellow give 0. That was the leetcode error.

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (row[mid] < 0) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return left
}

console.debug(binarySearchFirstNegative([-1,-1,-2,-3]));
console.debug(binarySearchFirstNegative([4,3,2,-1]));



console.debug(countNegatives([
    [4,3,2,-1],
    [3,2,1,-1],
    [1,1,-1,-2],
    [-1,-1,-2,-3],
]));
console.debug(countNegatives([
    [3,2],
    [1,0]
]));
console.debug(countNegatives([
    [1,-1],
    [-1,-1]
]));