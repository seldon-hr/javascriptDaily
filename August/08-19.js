console.log(typeof ('22' - 0));

/* 
Respuesta Correcta: A) number
Podemos convertir un string valido a number tan solo restandole 0. Es un hack interesante y una alternativa valida a usar el objeto Number, la función parseInt o el operador +.

El operador - solo cumple la tarea de realizar una resta en javascript, cuando se lo aplicamos a un string valido entonces el interprete tiene que convertir dicha cadena a number y luego realizar la operación, entonces nos aprovechamos de que el 0 es neutro aditivo para que la conversión sea exitosa.

Si intentamos usar este hack con cadenas no numéricas la conversión se realiza pero obtendremos un NaN como resultado, así que mucho ojo con eso.

  console.log(typeof("aaa" - 0)); // number 
 console.log(("aaa" - 0)); // NaN  
*/