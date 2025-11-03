/* 
    74: Search a 2D Matrix

    Own hints: the matrix doesn't have the 1d searching. 
    but as the exercise mention, the first integer of each row is greater than the last integer
    of the previouse row. That's mean the numbers are sorted.

    I think, first is to know the mid of the matrix
    then the mid of the each row. (as traditional binary search)
*/

var search2d = function (matrix, target) {
    let left = 0;
    let right = 0;
    //Use right as the last position of the matrix:
    for (const rowTemplate of matrix) {
        right += rowTemplate.length
    }
    right -= 1;  //total of positions, the last position of the virtual array.



    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        console.debug('Each mid:', mid);


        //Compute row and col
        let matrixCols = matrix[0].length

        let row = mid / matrixCols
        let col = mid % matrixCols

        let currentPosition = matrix[row][col]


        if (target === currentPosition) {
            return true;
        } else if (target < currentPosition) {
            //left = mid + 1
        } else {
            //right = mid -1
        }
    }
    return left
}





console.debug(search2d([
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
], 
target = 3
));
console.debug(search2d([
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
], 
target = 13
));