var containsDuplicates = function(nums) {
    let index = 0;
    let mapaValues = new Map();
    while (index < nums.length) {
        if (mapaValues.has(nums[index])) {
            return true;
        } else {
            mapaValues.set(nums[index], nums[index]);
        }
        index++
    }
    return false;
}

/* Por un grupo de arrays nos preguntan si existe un valor duplicado, si este existe: true
                                                                      no exites: false
    La situación en vez de realizarlo con un ciclo que llevemos valores como 
    nums[i] es igual alguno de nums[j]
    
    while(){
        element = nums[i];
        if(element = nums[j]){
            return true:
        }
    }
    return false

    Bueno, el enfoque que seguimos es el de un mapa, pero igual se puede hacer con un Set.

    */

console.debug(containsDuplicates([1, 2, 3, 3]));
console.debug(containsDuplicates([1, 2, 3, 4]));