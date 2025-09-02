let heights = [0,1,0,2,1,0,1,3,2,1,2,1]
/* Desarrollo de Trapping Water con el oppositeDirection */
var trapWater = function (heights) {
    let left = 0;
    let right = heights.length - 1;
    let total = 0;
    let maxLeft = heights[left];
    let maxRight = heights[right];

    while (left < right) {

        if (heights[left] <= heights[right]) {
            //Ajustar y tomar el valor inmediato, ¿por qué el máximo?
            maxLeft = Math.max(maxLeft, heights[left]);
            total += maxLeft - heights[left];
            left += 1;
        } else {
            maxRight = Math.max(maxRight, heights[right]);
            total += maxRight -heights[right];
            right -= 1;
        }
    }
    return total;
}

console.debug(trapWater(heights));