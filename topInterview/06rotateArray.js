/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    /* Tenemos que k es el número de rotaciones que va a tener un array que avanza.
        en este ejemplo debajo es k = 3, ¿Qué siginfica normalizar?
        Esto es aquello para poder reducir el número de vueltas innecesarias si esta se teniendo en un inicio.
        Sí tuvieramos que k = 10, y no normalizamos, esto significa que tenemos que avanzar 10 veces, pero nuestro array 
        es 6, esto significa que no tenemos que rotar 10, porque es dar vueltas de más, 
        la normalización encuentra el valor según el que es k = 3 % 6, conforme al valor de length del array.
        Esto reduce el número de vueltas que uno tiene que dar.
        Es como si decimo a alguien gira 360°, entonces, por esto no debe girar, porque equivale a no girar.
        Así si dicen 720°, es lo mismo de nuevo. Entonces, este enfoque con rotar. 
    */
    k = k % nums.length; //normalizar 


    /* Dentro creamos una función que hace un rotamiento, desde dos posiciones que pases.
        two pointers, un index, y un indexDecrase
        Y hacemos un intercambios de valores, no de una sola asignación sino de dos
        por medio de un array, y conforme a la posición una asignación.
    */

    function reverse(index, indexDecrase) {
        while (index < indexDecrase) {
            [nums[index], nums[indexDecrase]] = [nums[indexDecrase], nums[index]];
    
            index++
            indexDecrase--
        }
    }

    /* De aquí tendremo tres llamados, porque se un recorrer, no un solo reverse */
    /* Invertiry array. */
    /* Invertir hasta k, es decir de inicio a k */
    /* INvertir de k hasta el final. */

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    return nums;
};

console.debug(rotate([1,2,3,4,5,6,7],3));
