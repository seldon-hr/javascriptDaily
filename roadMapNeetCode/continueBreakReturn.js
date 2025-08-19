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
function processArray(nums, stopNumbers, passNumbers) {
    let listSuccess = [];
    let stopList = new Set(stopNumbers ? stopNumbers : []); 
    let passOptions = new Set(passNumbers ? passNumbers : []);
    let wasStopped = false;
    let caseStop;

    for (let i = 0; i < nums.length; i++) {
        if (stopList.has(nums[i])) {
            console.debug(`Función detenida por ${nums[i]} en la posición: ${i}`);
            caseStop = nums[i];
            wasStopped = true;
            break;
        }
        if (nums[i] < 0 || passOptions.has(nums[i])) {
            continue;
        }
        listSuccess.push(nums[i]);
        // procesar número positivo
    }

    // Trabajar la función como una API
    return {
        proccessItems: listSuccess,
        status: wasStopped ? `Interrupt` : `Ok`,
        message: wasStopped ? `Interrumpción por el caso: ${caseStop}` : `Se procesaron ${listSuccess.length} casos de ${nums.lenght}.`,
    }
}
/* 
Diferencias entre cada uno de estos casos:
continue: Ignora el resto del código para estos casos y pasa la nueva iteración.
break: Rompe el loop y pasa directo al return o el código fuera del loop.
return: Concluye la función y devuelve el objeto con la información según el caso. */