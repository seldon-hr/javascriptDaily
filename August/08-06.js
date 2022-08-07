const getName = (obj) => {
    obj.name ??= 'Sin Nombre';
    return obj;
};

console.log(getName({}));

/* 
Respuesta Correcta: C) { name:"Sin Nombre" }
El operador ??= se llama Logical Nullish Assignment es un operador de corto circuito moderno que 
consiste en ejecutar porciones de código si evaluamos una condición como nullish, osea, 
como valor null o undefined.

Entonces, en el ejemplo, si obj.name evalua como nullish, ejecutamos "Sin Nombre".

Llamamos a la función getName pasandole un objeto vacío, entonces todas sus propiedades son 
undefined y por consecuencia nullish, por ello a obj.name se el asigna el valor "Sin Nombre" y
 retornamos ese objeto.
*/