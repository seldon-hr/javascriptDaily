/* 
    El siguiente enfoque consiste en un ejercicio donde tenemos un array de alturas, y conforme a este, tenemos
    que sacar un área, ¿cómo se hace esto?
    Input = [1, 8, 6, 2, 5, 4, 8, 3, 7]

    Bien, este es el array de alturas, tenemos que tomar dos de estas, en vez de usar broute force, checar una por una con otra tipo O(n^2)
    Vamos a usar two pointers, uno de cada extremo, para checar mejor. left, y right.
    Como es la altura de la piscina de los dos extrmos, no podemos quedarnos con la mayor, porque de un lado tendrìamos 1, y 7, entonces se derramna.
    left = 0
    right nums.lenght - 1
    Por lo tanto, usamos la menor 1, 7, entonces 1 nos queda height: 1, y se multiplica por la base.

    ¿Còmo obtenemos la base?
    Esto segùn el problema conforme a la distancia entre las dos alturas, es decir de 1 en el array a 7, es 8, lo cual es right - left.
    Ahora si Àrea: height * base = 1 * 8 = 8. 
    
    Esto en nuestra primera iteración, como queremos saber el área más grande, entonces tomamos vamos a avanzar aquel valor mínimo, porque esto
    desfavorece a una máxima área.
    nums[left] < nums[right] ? left++ : right-- *El menor es el que avanza. Pero para escoger arriba el menor, podemos usar heigth = Math.min(nums[right], nums[left])

    Y al final vamos comparando el bArea contra Area, si es mayor asignar de lo contrario mantener.

    Con todo esto obtenemos un enfoque O(n), ya que no tenemos un doble loop.
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    let left = 0;
    let right = nums.length -1;
    let Area = 0;
    let bArea = 0;

    while(left < right){
        let distanceBase = (right - left);


        if(nums[left] < nums[right]){
            bArea = nums[left] * distanceBase;
            left++
        }else {
            bArea = nums[right] * distanceBase;
            right--
        }

        Area = Area > bArea ? Area : bArea;
    }
        return Area;
};