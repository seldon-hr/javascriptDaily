/* 
    Al momento de usar while uno mismo tiene que llevar el incremnto.
    Mientras que un for, el mismo loop lleva el incremento, entonces, ya no lo llevamos.


    continue: Ignora el resto del código y crea una nueva iteración, vital con while, generar el incremento antes.
    break: Termina el loop completo
    return: termina e ignora lo demás.
*/
//While
var processArray = function (nums) {
    let index = 0;
    while(index < nums.lenght){
      if(nums[index] === 100){
          break;
      }
      if(nums[index] < 0 || nums[index] === 50){
         index++
         continue;
     } 
      index++
    }
}


//For
function processArray(nums) {
    let listSuccess = [];
    let stopList = new Set(100); //podemos añadir más
    let passOptions = new Set(50); 
    for (let i = 0; i < nums.length; i++) {
        if (stopList.has(nums[i])) {
            console.debug('Me detuve porque encontre el 100 en la posición', i);
            break;
        }
        if (nums[i] < 0 || passOptions.has(nums[i])) {
            continue;
        }
        listSuccess.push(nums[i]);
        // procesar número positivo
    }
    console.debug('Procese todos')    
    return ('Lista Procesada', listSuccess)
}