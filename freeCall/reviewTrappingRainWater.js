let heights = [3, 0, 2, 0, 4]
/* Desarrollo de Trapping Water con el oppositeDirection */
var trapWater = function (heights) {
    let left = 0;
    let right = heights.length - 1;
    let total = 0;
    let maxLeft = heights[left];
    let maxRight = heights[right];

    while (left < right) {
        let area = 0;
        if (heights[left] <= heights[right]) {
            area = Math.min(maxLeft, maxRight) - heights[left];
            total += area;

            maxLeft = Math.max(maxLeft, heights[left]);
            left += 1;
        } else {
            area = Math.min(maxLeft, maxRight) - heights[right];
            total += area;

            maxRight = Math.max(maxRight, heights[right]);
            right -= 1;
        }
    }
    return total;
}

console.debug(trapWater(heights));