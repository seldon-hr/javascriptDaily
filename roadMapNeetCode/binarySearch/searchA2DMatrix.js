/* 
    74: Search a 2D Matrix

    Own hints: the matrix doesn't have the 1d searching. 
    but as the exercise mention, the first integer of each row is greater than the last integer
    of the previouse row. That's mean the numbers are sorted.

    I think, first is to know the mid of the matrix
    then the mid of the each row. (as traditional binary search)


    The trick: convert the matrix in a virtual array to searh into this.
*/

var search2d = function (matrix, target) {
    let left = 0;
    //Instead to sum of the length in each row with loop, use multiplication about matrix
    let right = matrix.length * matrix[0].length - 1; // matrix has  m (rows) and n (cols), the total of numbers  = m * n


    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.debug('Each mid:', mid);


        //Compute row and col
        let matrixCols = matrix[0].length

        /* Also know how to caculate the row and col position */
        let row = Math.floor(mid / matrixCols) //As we round under to the mid, the same with a matrix
        let col = Math.floor(mid % matrixCols)

        let currentPosition = matrix[row][col]


        if (target === currentPosition) {
            return true;
        } else if (target > currentPosition) {
            left = mid + 1
        } else {
            right = mid -1
        }
    }
    return false
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