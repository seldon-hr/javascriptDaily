const profesores = ['Oscar', 'Nico', 'Freddy', 'Christian', 'Angela'];
console.log(profesores.at(1)); //?
console.log(profesores.at(-1)); //?
console.log(profesores.at(10)); //?
console.log(profesores.at(3.8)); //?
console.log(profesores.at(-3.3)); //?

/*
Respuesta Correcta: A) Nico Angela undefined Christian Freddy
El método .at es una nueva forma de poder acceder a elementos de arreglos o a caracteres de cadenas.

Recibe como parámetro un número que representa en este ejemplo el índice al cual se quiere acceder.

.at(1) regresa el item "Nico" puesto que tiene el índice 1.
.at(-1) regresa el item "Angela", es una manera elegante de acceder al último item de un arreglo.
.at(10) regresa undefiend puesto que no existe un item con dicho índice en el arreglo.
.at(3.8) y .at(-3.3) solo tomaran la parte entera del parámetro, por ende tendremos .at(3) que regresa "Christian" y at.(-3) que regresa "Freddy".



*/
