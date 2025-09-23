/* Ejercicio de active call con 3sum
    En este se pretende devolver toda ternia de elementos en los cuales la suma de estos elementos 
    de 0, no se vale repetir ternias. 
    Practicamente, cada una de las combinaciones posibles.
*/
let arrayOne = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
    //Order
    nums = nums.sort((a, b) => a - b);

    //Caso edge: Todos los números son positivos.
    if (nums[0] > 0) {
        return [];
    }

    let ternias = [];
    for (let index = 0; index < nums.length - 2; index++) {
        const element = nums[index];

        //Casos Edge
        if (index !== 0 && element === nums[index - 1]) {
            continue;
        }

        let left = index + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            
            let sum = element + nums[left] + nums[right];
            if (sum === 0) {
                ternias.push([element, nums[left], nums[right]]);
                
                left += 1;
                right -= 1;

                /* Vale, si veo y observó que la lógica debe ser después de encontrar una ternia. 
                    Y allí checar que no sean valores duplcados, para left y right.*/

                //Después de incremantar no agregar lvalores iguales.
                while (left < right && nums[left] === nums[left -1]) {
                    left += 1;
                }

                while (nums[right] === nums[right + 1] && left < right) {
                    right -= 1;
                }
            } else {
                if (sum < 0) {
                    right -= 1;
                } else {
                    left += 1;
                }

            }

        }
        
    }
    return ternias;
}

console.debug(threeSum(arrayOne));