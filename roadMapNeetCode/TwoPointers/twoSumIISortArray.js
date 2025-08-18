/* En este enfoque no necesitamos emplear el uso de hashing maps
    ya que, tenemos un orden de los elementos. Entonces, con esto tenemos que los arrays están ordenados, así tenemos 
    que cuando vemos si es la suma:
        devolver    
    es menor la suma que target:
        left debe ser más grande
    es mayor que target:
        right debe ser menor

    *Recorremos one by one.
*/
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length -1;

    while(left < right){
        if(numbers[left] + numbers[right] === target){
            return [left+1, right+1];
        }else if(numbers[left] + numbers[right] < target){
            left++
        }
        else {
            right--;
        }
    }
}