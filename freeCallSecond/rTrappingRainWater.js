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

        if (maxLeft <= maxRight) {
            area = maxLeft - height[left]; //Omits because already know who is the minimum
            
            //update when is higher
            maxLeft = Math.max(maxLeft, height[left])
            
            left += 1
        } else {
            area = maxRight - height[right];

            
            //update when is higher
            maxRight = Math.max(maxRight, height[right])
            
            right -= 1
        }
        
        totalWater += area;
    }
    
    return totalWater;
}

console.debug(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.debug(trappingWater([4,2,0,3,2,5]));