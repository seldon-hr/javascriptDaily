/* 
    270: Search into a Matrix 2D II

    Hint: there's no other, forget to use the mid and the traditional two pointers opposite direction
    that was my confusion.
*/

var search2d = function (matrix, target) {
    
    //Search and based by columns and rows
    let row = 0
    let col = matrix[0].length - 1

    while (row < matrix.length && col >= 0 ) { //not breaks the positions
        let currentPosition = matrix[row][col]


        if (target === currentPosition) {
            return true
        } else if (currentPosition > target){
            col -= 1
        } else {
            row += 1
        }
    }

    return false
}

/* 
    Here, the trick of use the eliminate by rows, the last number of a row is larger ⬅️
    of the entire row, but smaller than previous last row col. ⬇️
    that's how we are deleting. by rows.
*/





console.debug(search2d([
    [1, 4, 7, 11, 15],
    [2,  5,  8,  12, 19],
    [3,  6,  9,  16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 
target = 5
));
console.debug(search2d([
    [1,  4,  7,  11, 15],
    [2,  5,  8,  12, 19],
    [3,  6,  9,  16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 
target = 20
));