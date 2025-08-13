/* var removeElement = function (nums, val) {
    let index = 0;
    let k = 0;
    while (index < nums.length) {
        if (nums[index] === val) {
            nums.splice(index, 1)
        } else {
            k++
            index++
        }

    }
    return [k,nums];
} */




/* Remove element
As this approach is in-place, so we need to modify to move the elements that are different
*/

var removeElement = function (nums, val) {
    let differenElements = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element !== val) {
            nums[differenElements] = nums[index];
            differenElements++
        }        
    }
    return differenElements;
}


console.debug(removeElement([1, 1, 2, 3, 4], 1));