
/* Type of  data */
function solution (valor) {
    type =  typeof(valor);
    return type
}

console.log(solution(2))

/* null y undefined
    null representa un valor intencionalmente vació;
    undefined un valor que no ha sido asignado o no tiene un valor definido.
*/

/* Por ejemplo, podríamos utilizar null para representar que un gatito aún no tiene dueño: */

let gatito = {
  nombre: "Michi",
  edad: 3,
  dueño: null
};

console.log(gatito.dueño); // "null"
/* Por otro lado, podríamos utilizar undefined para representar que un gato aún no ha sido adoptado: */

let gato;
console.log(gato); // "undefined"

/* Symbol
Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en una aplicación.

Ejemplo: */

const simbolo = Symbol();

let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"
/* También puedes proporcionar una descripción opcional al crear un símbolo, lo que puede ser útil para depurar y mantener el código: */

const simbolo = Symbol("Identificador único de gatitos");
/* Es importante tener en cuenta que los símbolos son valores únicos, lo que significa que dos símbolos creados de manera independiente nunca serán iguales, incluso si tienen la misma descripción. Esto hace que los símbolos sean ideales para usar como identificadores únicos en tus futuras aplicaciones.

BigInt
Los bigint son un nuevo tipo de dato en JavaScript que se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa. Los bigint se escriben con el sufijo n, por ejemplo: 12345678901234567890n.

Aquí tienes un ejemplo de cómo usar bigint en JavaScript: */

const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
/* Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de comparación, como == o ===. En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN para hacer comparaciones entre bigint y números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte de verificar la documentación de la función o método que quieres usar antes de intentar usar bigInt con ellos. */