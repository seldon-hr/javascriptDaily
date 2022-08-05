// Explica este código JavaScript
console.log(`${((x) => x )('I love')} to program`);

/*
Output 'I love to program'

Al usar los blacklist de ES6, las expresiones se evaluan primero.

En este caso la expresión completa es:

    ${(x => x)('I love')}

donde:

(x => x) es una función anónima de tipo flecha, que recibe un parámetro x y con un return implícito lo devuelve.
('I love') es la llamada a la función anónima, acá pasamos como argumento a la función la cadena I love
Entonces, la función es la llamada y regresa el parámetro que se le pas. Por ello es I love to program.

No hay llaves de la función anónima, ya que al ser solo una línea esta entra así como un if de bloque.
*/