let heights = [0,1,0,2,1,0,1,3,2,1,2,1]
/* Desarrollo de Trapping Water con el oppositeDirection */
var trapWater = function (heights) {
    let left = 0;
    let right = heights.length - 1;
    let total = 0;
    let maxLeft = heights[left];
    let maxRight = heights[right];

    while (left < right) {

        if (heights[left] <= heights[right]) {
            /* Al momento de escoger entre las dos alturas nos garantiza que en esta posición
            maxLeft es menor que maxRight, por eso, ya no es necesario hacer esto
            Math.min(maxLeft, maxRight), esto ya se corrobora con que es el  menor de ambos.
            Esto evita esta operación redundante, pero no afecta en la complejidad.
            */
            //Ajustar y tomar el valor inmediato, ¿por qué el máximo?
            maxLeft = Math.max(maxLeft, heights[left]); //Tomar el valor más alto del maxLeft, por si es mayor.
            total += maxLeft - heights[left];
            left += 1;
        } else {
            /* Mismo caso , entramos cuando heights[right] < heights[left], por 
            ende maxRight es menor que maxLeft */
            maxRight = Math.max(maxRight, heights[right]);
            total += maxRight - heights[right];
            right -= 1;
        }
    }
    return total;
}

console.debug(trapWater(heights));