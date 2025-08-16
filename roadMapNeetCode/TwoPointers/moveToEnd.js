/* Mover un valor al final del array. Intercambiando valores */
var moveToEnd = function (nums, toMove) {
    // Iniciamos en el final
    let right = nums.length - 1;
    // al inicio
    let left = 0;
    /* Solo nos intersa que left sea menor hasta que se encuentre con right
    ¿Por qué?
    Tenemos que están intercambian valores hasta el final, entonces, cuando se encuentren,
    será la mita del array, no sería neceario, porque ya fueron todos los valores distintos, porque left
    solo crece cuando se intercambian o cuando no es igual a ese valor.
    */
    while (left < right) {
        if (nums[left] === toMove) {
            //left es igual, pero también right, no tenemos que mover, ese right que se quede aalí.
            if (nums[right] === toMove) {
                right--
            } else {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++
                right--
            }
        } else {
            left++
        }
    }
    return nums
}

console.debug(moveToEnd([2, 1, 2, 3, 4, 2], 2));