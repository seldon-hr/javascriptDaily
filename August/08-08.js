const person = {
    id: 1,
    name: 'Carlos',
};

person.name = 'Peter';
console.log(person.name);

//Output 'Peter'

/* 
Inicialmente el objeto persona tiene en la llave nombre la cadena Fernando pero luego hacemos persona.nombre = "Pedro" que actualiza el valor de nombre perdiendo la cadena Fernando.
*/