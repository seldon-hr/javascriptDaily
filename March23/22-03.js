/*
* * Funciones declarativas
    Utilizando la palabra reservada function al inicio para poder declarar la función
*/
    function saludar(nombre) {
        console.log(`Hola ${nombre}`);
    }

    saludar('Diego');

    /* 
    * *  Expresión de función  o Función de expresión
        Haciendo uso de la palabra reservada var, en la cual
        se generá una variable que guardará una función anónima.
    */

    var nombre = function(nombre){
        console.log(`Hola ${nombre}`);
    }
    /* dentro de esta función pueden no llevar nombre, resultando anónimas. */
    nombre('Diego');

    /* 
    * *IIFE (Inmediately Invoked Function Expression) 
        Una función que es autoejecutada inmediatamente después de ser definida
        Es una anónima y no puede ser reutilizada*/

        (function(){
            console.log("Soy un IIFE");
        })();

    /* 
    * Arrow functions
     */