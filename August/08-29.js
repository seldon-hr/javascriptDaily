//Use palabras reservadas dentro de objetos.
const test = {
  if: 'Es un condicional',
  let: 'Es una manera de declarar variables',
  for: 'Es un bucle',
};
console.log(test.for); //??
/*
Respuesta Correcta: B) Es un bucle
Dentro de un objeto literal es posible usar nombres de palabras reservadas del lenguaje como nombres de keys, esto es perfectamente valido.

❌ Pese a que es valido, se recomienda no hacer esto y respetar las palabras reservadas de javascript. ¡No hagas nunca esto! Solo se conciente que es posible.

*/
