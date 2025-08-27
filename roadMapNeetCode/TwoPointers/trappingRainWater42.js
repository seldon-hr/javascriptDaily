let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let totalArea = 0;
    while (i < height.length) {
        let j = i + 1;
        if (height[i] === 0) {
            i += 1; 
            continue //Saltamos al siguiente no podemos acumular sin borde porque es 0.
        }
        if (height[j] < height[i]) { //Saltamos hasta que j lo iguale 
            j += 1;
            continue
        }

        let side = Math.min(height[i], height[j]);
        let area = side * side;
        totalArea += area;

        //Saltamos hasta que i sea j, o valle
        i = j;
    }
    return totalArea;
};

console.debug(trap(heights));