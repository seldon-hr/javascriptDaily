/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */


/* Solución de forma que esta sin checar nada de información. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        for (let index1 = index + 1; index1 < nums.length; index1++) {
            const element1 = nums[index1];
            
            sum = element + element1;
            if (sum === target) {
                return [index, index1];
            }
        }
    }
}; */

/* Solución, pero con el uso de reduce, ¿se puede?
    en este caso no, nos sirve por cuestión de que reduce termina con un valor.
*/
// var twoSum = function (nums, target) {
//     nums.reduce((sumAcumulador, item) => {/* Lógica here */ }, 0);
// }



/* Solución con un mapa, el cual nos sirve para no escalar en revisión de cada caso, sino un control O(n)
    Uso de maps, pero igual se le puede considerar como hashmap con el uso de un object.
*/
/* 
*Tenemos que hacemos un cálculo conforme a la difrencia y esta la almacenamos dentro de un mapa
* el cual asignamos su elemento, como llave, y su índice como valor. entonces donde nos encontremos
* la diferencia va a ser el primer valor, porque ya fue almacendado, y el segundo conforme al quien itere en el loop.
*/
var twoSum = function (nums, target) {
    let visited = new Map();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        //La diferencia será nuestro indicador del primer valor.
        let difference = target - element;
        //¿Un valor tiene la diferencia?
        if (visited.has(difference)) {
            //Significa que este que tenga la idrencia es la suma con el actual.
            return [visited.get(difference), index];
        } else {
            //No, lo almacenamos en el mapa.
            visited.set(element, index);
        }
    }
}





console.debug(twoSum([2, 7, 11, 15], 9));
/* console.debug(twoSum([2, 7, 11, 15], 18)); */
console.debug(twoSum([3,2,4], 6));
console.debug(twoSum([3,3], 6));