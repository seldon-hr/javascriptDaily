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


    for (const currentHeight of height) {
        //Set the max height, but I remember so so, there's a better way.
        let heightLeft = height[0];
        let heightRight = height[height.length - 1]

        while (left < right) { //I think it's enough, 'cause needs to sides to calculate and area.
            
            heightLeft < height[left] ? heightLeft = height[left] : heightLeft
            heightRight < height[right] ? heightRight = height[right] : heightRight

            let area = Math.min(heightLeft, heightRight) - currentHeight;
            
            totalWater += area;
        }
    }
    return totalWater;
}

console.debug(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.debug(trappingWater([4,2,0,3,2,5]));