
const person = { name: 'nico', age: 28 };
const newPerson = person;
newPerson.name = 'santi';
console.log(person.name);

/*
Respuesta Correcta: B) santi
En JavaScript existen dos tipos de asignaciones por referencia vs. por valor y esta diferencia es clave, ya que puede producir comportamientos inesperados.

La asignación por valor funciona en los valores primitivos, como por ejemplo:

let  numberA = 45;
let numberB =  numberA;
numberA = 99;
console.log( numberB); // 45

En el caso anterior numberB tiene el valor 45, diferente para arrays, funcions y objetos, en donde se hace una asignación por referencia:

const objA = {age: 45};
const objB =  objA;
objA.age = 99;
console.log( objB.age); // 99

Quiere decir que no estamos copiando el valor, sino la referencia, por lo tanto, un cambio en él puede tener consecuencias en otro.


*/
