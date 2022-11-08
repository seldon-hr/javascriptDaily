const nombre = 'Cristian';
nombre = 'Fernando';
console.log(nombre);

const persona = {
    id: 1,
    nombre: 'Cristian',
};

persona.nombre = 'Fernando';
console.log(persona.nombre);

/* Cuando declaramos variables primitivas con const estas deben ser como su nombre lo indica valores contantes, por ende no podemos motificar su valor, si intenamos cambiarlo obtendremos un TypeError.

Lo anterior mencionado no pasa con los objetos, si declaramos un objeto con const luego podemos tranquilamente modificar sus propiedades. ¿Por que pasa esto?

Las variables primitivas tienen asignación por valor, pero las variables complejas como los objetos tienen asignación por referencia, entonces cuando se intenta cambiar las propiedades de un objeto declarado con const estamos alterando sus propiedades pero no al objeto en si, en el ejemplo el objeto persona al ser creado reservamos un espacio en memoria que lo almacene, pero no cambiamos dicho espacio, solo sus propiedades.

Haciendo una analogía para comprederlo mejor, una persona, yo por ejemplo: Cristian; desde que naci soy Cristian, a medida que paso el tiempo varias cosas cambiaron en mi, aumento mi estatura, ahora uso lentes, mi cabello esta mas largo, etc., pero sigo siendo yo, pueden cambiar mis propiedades pero en el fondo sigo siendo yo. */