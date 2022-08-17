function sumar(a, b) {
    return a + b;
  }
  sumar(2, 4);

  /* 
  Respuesta Correcta: B) Declarativa
En JavaScript tenemos dos tipos diferentes de funciones: Las Funciones Declarativas y las Funciones Expresivas.

Funciones Declarativas: Este tipo de funciones se caracteriza principalmente por el hecho de que son generadas haciendo uso de la palabra reservada function al inicio de la declaración.
function saludar(nombre) { console.log(`Hola ${nombre}`); } saludar("Platzi💚");
Funciones Expresivas: A diferencia de las funciones de tipo declarativas, estas no requieren el uso de la palabra reservada function al inicio y, en cambio, son generadas a través de la asignación a una variable que albergará la función, estas funciones son creadas comúnmente como una función anónima, aunque también pueden llegar a ser nombradas.
let saludar = function(nombre) { console.log(`Hola ${nombre}`); } saludar("Platzi💚")
Diferencias:

- Las funciones declarativas se ven afectadas por el hoisting mientras que las expresivas no.

- Las funciones declarativas pueden ser invocadas inclusive antes de ser declaradas en el orden secuencial del código, debido de igual manera al efecto ocasionado por el hoisting.

- Contrario a lo anterior, una función expresiva únicamente puede ser invocada luego de haber sido generada en el orden lógico del código a causa de que esta no es afectada por el hoisting.
  
  */