function getAge(...args) {
    console.log(typeof args);
}

getAge(21);
//Output -> object

/* 
Cuando usamos la sintaxis de ... en los parámetros de una función (ES6: Rest Operetor)
convertimos a dichos parámetro a un arreglo.

Entonces es tentator marcar como un 'array' pero esto sería un error de novato.
En JS no existe el tipo de dato array, para tipos no primitivos el lenguaje los evalua como
object. Por ese motivo la respuesta correcta es la opción object.
*/
