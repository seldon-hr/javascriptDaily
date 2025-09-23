/* Ejercicio de active call con 3sum
    En este se pretende devolver toda ternia de elementos en los cuales la suma de estos elementos 
    de 0, no se vale repetir ternias. 
    Practicamente, cada una de las combinaciones posibles.
*/
let arrayOne = [-1, 0, 1, 2, -1, -4];
var threeSum = function (numbers) {
    //Order
    numbers = numbers.sort((a, b) => a - b);


    let ternias = [];
    for (let index = 0; index < numbers.length - 2; index++) {
        const element = numbers[index];

        //Casos Edge
        if (index != 0 && element === numbers[index - 1]) {
            index += 1;
            continue;
        }

        let left = index + 1;
        let right = numbers.length - 1;
        
        while (left < right) {
            
            let sum = element + numbers[left] + numbers[right];
            if (sum === 0) {
                ternias.push([element, numbers[left], numbers[right]]);
                
                left += 1;
                right -= 1;
            } else {
                

                while (numbers[left] === numbers[left -1]) {
                    left += 1;
                }

                while (numbers[right] === numbers[right + 1]) {
                    right -= 1;
                }

            }

        }
        
    }
}