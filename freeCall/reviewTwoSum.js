/* Solución free recall, donde lo resolví a diferencia de la primera vez.
    aquí tenemos el uso de un solo loop, a diferencia de haber usado
    dos ciclcos anidados. */
/* var twoSum = function (nums, target) {
    let index = 0;
    while (index < nums.length) {
        let secondIndex = index + 1;
        if (nums[index] + nums[secondIndex] === target) {
            return [index, secondIndex];
        }
        secondIndex++
        index++
    }
}
 */


/* Checando notas de como se soluciona con mapas, sin ver code. */
/* Sin embargo, la solución de este enfoque es por medio del uso de hashmaps o maps. donde guardamos una clave única.
por medio de la diferencia en vez de la suma. El ejercicio quiere encontrar la suma.
    z = x + y; //suma
    z - x = y; //diferencia

    Con este enfoque, vamos a guardar la diferencia en el mapa, y preguntar si ya existe.
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
        index++
    }
}


/* 
    Como aporte podemos decir que había olvidado el uso de los mapas, con la ventaja que nos
    devuelve la diferencia en este cálculo. Alamacenamos la diferenica, y si ya existe, entonces ese número + el actual.
    porque esta es la suma.
    [3, 2, 4], 6

    index: 0 | nums[index]: 3 | diff: 6 - 3 = 3  | mapas.has(diff) -> no |  mapa ({ 3 => 0 })
    index: 1 | nums[index]: 2 | diff: 6 - 2 = 4  | mapas.has(diff) -> no | mapa ({ 3 => 0, 4 => 1 }
    index: 2 | nums[index]: 4 | diff: 6 - 4 = 2  | mapas.has(diff(2)) -> sí | return [mapa.get(diff), index] = []

*/




console.debug(twoSum([2, 7, 11, 15], 9));
console.debug(twoSum([3,2,4], 6));
console.debug(twoSum([3, 3], 6));