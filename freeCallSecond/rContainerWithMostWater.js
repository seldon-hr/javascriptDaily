/* 
    11: Container with most water
    This is a review, previously I had resolved. so let's see:
*/

/**
 * @param {number[]} height
 * @return {number}
 */
 /* Formula
    area = Min(height[left], height[right]) * base
    base = right - left;
  */
var maxArea = function(height) {
    let baseArea = 0;
    let left = 0;
    let right = height.length - 1;
    console.debug(left, right);
    while(left < right){

        //Compute the area
        let base = right - left;
        let area = Math.min(height[left], height[right]) * base;
        console.debug('Area', area);
        
        if(area > baseArea){
            baseArea = area;
        }

        //Moves pointers
        if(height[left] < height[right]){
            left += 1
        } else { //That was the only mistake, a syntax mistake, left to put else. The rest was by my own.
            right -= 1
        }
    }

    return baseArea;
};

console.debug(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));