const getName = (obj) => {
    obj.name ??= 'Sin Nombre';
    return obj;
}
console.log(getName({}))

/* 
    Output {name: 'Sin Nombre'}

    El operador ??= se llama Logical Nullish Assignment es un operador de corto circuito moderno que 
    consiste en ejecutar porciones de código si evaluamos una condicón como nullish, osea, como valor
    null or undefined.

    Entonces, en el ejemplo, si obj.name evalua como nullish, ejecutamos 'Sin nombre'.

    Llamamos a al función getName pasandole un objetov vació, entonces todas su propiedades son undefined
    y por consecuencia nulish, por ello a obj.naem se le asigna el valor 'Sin nombre' y retornamos ese
    objeto.
*/