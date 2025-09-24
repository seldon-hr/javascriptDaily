/* 347. Top k frequent elements */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //Edge cases
    if(k === nums.length) return nums;

    //Number of repeats each number
    let mapa = new Map();
    let index = 0;
    while(index < nums.length){
        if(mapa.has(nums[index])){
            let val = mapa.get(nums[index]);
            val += 1;
            mapa.set(nums[index], val)
        } else {
            mapa.set(nums[index], 1);
        }
        index += 1;
    }

    //Sorting approach
    /* Dentro de esta parte nos encontramos creando solo una reaptción de aquellos valores 
    que son un número mayor de veces repetidos.
        Funcionando de la siguiente forma:
        Tenemos nuestro mapa a iterador de pares:
        mapa..entries():
        {1 -> 3, 2 -> 2, 3 -> 1} -> [[1, 3], [2,3], [3, 1]], lo toma con el mapa, pero ejemplo * el mapa ya esta ordenado, pero no es así.
        Posteriormente aplicamos un sort especial. Tomando el segundo valor
        .sort((a, b) => b[1] - a[1]) tomando el valor de frecuencias, el cual sería su segundo valor de cada elemento del array.
    */
    const maxHeap = [...mapa.entries()].sort((a, b) => b[1] - a[1]);

    /* De aquí, procedemos a tener un valor de que tome los primeros k valores
        Nos detenemos en k valores
        Y solo agregamos su primer valor, es decir la key por eso maxHeap[i][0] el cero del primer valor.
    */

    const result = [];
    for(let i = 0; i < k; i++){
        result.push(maxHeap[i][0])
    } 

    return result;
};