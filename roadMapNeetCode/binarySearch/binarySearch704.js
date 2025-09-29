/* 704: Binary Search
    Own hints:
    - Usar left and right.
    - Preguntar por si es el valor, de lo contrario, valor > target ? tomar valor medio
    mayor : tomar valor medio menor.
        -Calcular el valor medio.
    -Termina el loop, no lo encontró devolver -1



    
    
    Algorimto
    - medio = nums.length/2 -1
    - medio === target ? return index : pass next step
    - medio < target ? take second halft : take the first half
    - recorremos los pointers left & right para seleccionar la mitad
    correspondiente, porque perderíamos los índices originales.

*/

let nums = [-1, 0, 3, 5, 9, 12];
var findNumber = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.round((left + right)/2)
        
        if (nums[mid] === target) {
            return mid;
        } else {
            if (nums[mid] < target) {
                //Partimos de mid + 1, porque mid ya fue descartado.
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}


console.debug(findNumber(nums, 9));