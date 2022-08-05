const sayHi = () => {
    return (() => 'Hi Javascript!')();
  };
  
  console.log(typeof sayHi());

  /* 
  Respuesta Correcta: C) string
La función sayHi regresa una otra función de tipo flecha, dicha función es anónima y solo devuelve la cadena Hi JavaScript, el detalle acá es que esta función anónima una vez regresada es inmediatamente llamada.

Entonces sayHi será igual a la cadena Hi Javascript y en conclusión su typeof igual a string.

Podriamos ver también este ejemplo si extraemos la función anónima y escribimos en una función auxiliar por aparte, de la siguente manera:

  const aux = () => {
 return "Hi Javascript!"
 }

const sayHi = () => {
 return aux();
 }

console.log(typeof sayHi()); // string  

  
  */