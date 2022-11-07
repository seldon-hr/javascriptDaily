let objeto1 = { valor: 10};
let objeto2 = objeto1;
let objeto3 = { valor: 10};
console.log(objeto1 == objeto2);
console.log(objeto1 == objeto3);
objeto1.valor = 15;
console.log(objeto2.valor);
console.log(objeto3.valor);


/* 
    Respuesta Correcta: A) true, false, 15, 10
Al trabajar con objetos en javascript hay que difereciar 2 aspectos fundamentales: tener 2 referencias al mismo objeto y tener 2 objetos diferentes pero con las mismas propiedades.

Al crear objeto1 estamos reservando un espacio en memoria para guardar dicho objeto. Cuando asignamos objeto1 a objeto2 lo único que hacemos es que ambos objetos apunten a la misma dirección de memoria donde esta almacenado el objeto1. En otras palabras, tanto objeto1 y objeto2 no son independientes el uno del otro, si modificamos uno el otro también se vera afectado.

Como ambos apuntan a la misma dirección de memoria entonces al usar el operador débil de comparación == obtenemos true.

Pero si comparamos el objeto1 contra el objeto3 tendremos false puesto que si bien ambos tienen las mismas propiedades, estan almacenados en direcciones de memoria diferentes.

Para finalizar, cuando hacemos:

  objeto1.valor = 15;
 console.log(objeto2.valor);
 console.log(objeto3.valor);  


Modificamos el valor de objeto1 pero como apuntan a la misma dirección de momoria entonces también modificamos el valor del objeto2 a 15.

El objeto3 no sufre ningún cambio.
*/