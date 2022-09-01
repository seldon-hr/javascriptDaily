
function test() {
  let name = 'Seldon';
  if(true) {
    console.name(name);
    let name = 'Ozymandias';
    }
}
console.log(test());

//Output -> ReferenceError: Cannot access "name" before initialization
/* 
Dos aspectos a tomar en cuenta en este ejemplo.

Primero, recordar que las varibles declaradas con let o const tienen scope de bloque.
Segundo, rercordar que las variables declaradas con let o const no tienen hoisting, cuando intentamos
acceder a una variable antes de su inicialización entre en la Temporal Dead Zone.
La variable name no puede ser mostrada sin ants incializarla, name esta en su
Temporal Dead Zone.

En orden, console llama a la función, esta empieza a trabajar, establece name como Seldon, sin embargo, este solo queda dentro de este bloque,
no va a afectar a los bloques que esten dentro, por ello, en el siguiente, un if, se imprime, por eso vamos a marcar el error, no puede nombrar
por el hoisting, no ha sido declarad, por eso name, pasa a la Temporal Dead Zone.




*/
