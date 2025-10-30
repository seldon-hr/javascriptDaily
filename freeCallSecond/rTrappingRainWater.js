/* 
    Free recall by 42: Trapping Rain Water

    Own hints: Use to calculate the total water was captured. The trick is not calculate the area
    by valleys, it is to calculate by position.

    The formula in found is area = Math.min(height[left], height[right]) - height[currentPosition];
*/

var trappingWater = function(height){
    let left = 0;
    let right = height.length - 1;
    let totalWater = 0;
    let currentPosition = 0;
    let reversedHeight = height.toReversed()

    while (left < right) { //I think it's enough, 'cause needs to sides to calculate and area.

        //Max heights
        let maxLeft = Math.max(height);
        let maxRight = Math.max(reversedHeight);
        /* but lef'ts something as the how to know if the new is taller, 
        and the approach with several valley, not always apllies the max general
        use the max at that point. 0 - i and i - 0, we left this.
        */

        maxLeft < height[left] ? maxLeft = height[left] : maxLeft
        maxRight < height[right] ? maxRight = height[right] : maxRight


        let area = Math.min(maxLeft, maxRight) - currentPosition;
        totalWater += area;

        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }



        //I'm not sure yet, where's put this.
        currentPosition += 1;
    }
    
    return totalWater;
}

console.debug(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.debug(trappingWater([4,2,0,3,2,5]));