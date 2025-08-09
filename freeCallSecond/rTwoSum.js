/* Free recall
    REturn the indices of both add up by the target.
    target = x + y

    targt - x = y
*/
var twoSum = function (nums, target) {
    let visited = new Map();
    let index = 0;
    while (index < nums.length) {
        let diff = target - nums[index];
        if (visited.has(diff)) {
            return [visited.get(diff), index];
        } else {
            visited.set(nums[index], index);
        }

        index++;
    }
}

//Correcto el patrón de código, ahora solo faltaría el entendimiento del problema.



console.debug(twoSum([2, 7, 11, 15, 9],9));