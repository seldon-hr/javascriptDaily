let nums = [-1, 2, -1, -4];


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Bien, se implementan varios cambios, lo que aquí ocurre es que necesitamos entender que vamos a fijar un número
 * pero como es una suma de 3, necesitamos dos restantes elementos, por lo cual, estos parten después del fijado.
 * Así tenemos que siempre vamos a contar con al menos, dos elementos.
 * Esto de manera más robusta, sería con un loop tipo for.
 * for(let i = 0; i < nums.length -2; i++) // hablamos de un elemento de que busquemos al menos los otros dos.
 */
var threeSumClosest = function(nums, target) {
    let numsSort = nums.sort((a,b) => a - b);
    let bestSum = nums[0] + nums[1] + nums[2];
    let set = 0;
    while(set < numsSort.length){
        let fijado = nums[set];
        let left = set + 1;
        let right = numsSort.length -1;

        while(left < right){
            let sum =  fijado + (nums[left] + nums[right]);
             
             if(sum === target){
                //Significa que encontramos una suma igual al target.
                return target;
             }
             //Uso del número absoluto para poder determinar como sería la distnacia menor, y asignar esa.
             if(Math.abs(sum - target) < Math.abs(bestSum - target)){
                bestSum = sum;
             }
            //Same logic as two pointers. 
            /* Incrementamos cuando la sum sea menor que el target, pero bajamos cuando es muy grande. */
             if(sum < target){
                left++
             }else {
                right--
             }
        }
        set++
    }
    return bestSum;
};