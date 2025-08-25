let nums = [-1, 0, 1, 2, -1, -4];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    // Caso donde los valores no sumarían 0, porque el valor es mayor igual o mayor a 0, positivos
    if (nums[0] > 0) return [];  

    let arrayCases = [];
    let index = 0;
    //Hasta -2, porque necesitamos al menos tres números para la suma. 3sum
    while (index <= nums.length - 2) {
        //Saltar si un fijado es igual, porque tendríamos los mismos casos, y no queremos duplicados.
        if (index > 0 && nums[index] === nums[index - 1]) {
        // ⬆️ Validar que al menos no sea undefined, por el index - 1
            index += 1;
            continue;  
        } 

        let left = index + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[index] + nums[left] + nums[right];

            if (sum === 0) {
                //guardar caso
                arrayCases.push([nums[index], nums[left], nums[right]]);
                //mover ambos
                left += 1;
                right -= 1;

                //Saltar duplicado en left
                while (left < right && nums[left] === nums[left - 1]) {
                    left += 1;
                }

                //Saltar duplicados right
                while (left < right && nums[right] === nums[right + 1]) {
                    right -= 1;
                }
            } else {
                //Mover left or right
                if (sum < 0) {
                    left += 1;
                } else {
                    right -= 1;
                }
            }
        }         
        index += 1
    }
    return arrayCases;
};


console.debug(threeSum(nums));