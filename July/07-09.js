
// Explica este código JavaScript

function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error!', e);
  }
}

sayHi();

// Respuesta Correcta: D) "Oh no an error! Hello world!"
// La función greeting con la palabra reservada throw genera una excepción de tipo string en el código.

// La función sayHi consta de una sentencia try...catch, recordemos que si no hay ningún tipo de excepción el código ejecuta
// el bloque try pero como si generamos una excepción entonces entramos al bloque catch donde el parámetro e adopta el valor de la excepción,
//   osea, Hello world!. Por eso el resultado es "Oh no an error! Hello world!"
