/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let index = 0;
    function deleteVal(element) { 
        console.debug(`Index Start ${index} y el element ${nums[index]}`)
        if (index < nums.length) {
            if (element == val) {
                console.debug('index:', index, 'valor:', element);
                nums.splice(index, 1);
            } else {
                index++;
            }
            deleteVal(nums[index]);
        }
    }
    deleteVal(nums[index]);
    
    console.debug('Array:', nums);
    return nums.length;
};
/* ⬆️ El mismo ejercicio puede ser resuelto sin hacer uso de un parámetro en la función recursiva.
    porque, entonces tenemos que dnetor de nuestra comparación de si es igual a val, sería nums[index], y así con todos. */
let nums = [3, 2, 2, 3];
let val = 3;
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;

/* console.debug(removeElement(nums, val)); */
console.debug(removeElement(nums2, val2));