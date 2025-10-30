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

    //Max heights
    let maxLeft = height[left];
    let maxRight = height[right];


    while (left < right) { //I think it's enough, 'cause needs to sides to calculate and area.
        let area = 0;

        if (maxLeft < maxRight) {
            //update when is higher
            maxLeft < height[left] ? maxLeft = height[left] : maxLeft
            
            area = Math.min(maxLeft, maxRight) - height[left];
            left += 1
        } else {
            //update when is higher
            maxRight < height[right] ? maxRight = height[right] : maxRight
            
            area = Math.min(maxLeft, maxRight) - height[right];
            right -= 1
        }
        
        totalWater += area;
    }
    
    return totalWater;
}

console.debug(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.debug(trappingWater([4,2,0,3,2,5]));