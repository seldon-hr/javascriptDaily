// Explica este c贸digo JavaScript 馃槵

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;

// Respuesta Correcta: B) Impossible! You should see a therapist after so much JavaScript lol
// Muchas cosas que analizar en este ejemplo.

// La sintaxis de backtick o de comillas simples invertidas (alt+96) sirven para evaluar expresiones dentro de cadenas de texto.

// Primera expresi贸n a evaluar:

// En ${[] && Im} tenemos el operador de corto circuito &&. Para usar los operadores de corto circuito debemos tener en cuanta los valores truthy y falsy. Si la primera parte de la expresi贸n evalua como truthy entonces ejecutamos la segunda parte de la expresi贸n.

// Los valores truthy son: true, {}, [], cualquier valor de tipo number (42, -56, 1.5, -6.33), cualquier string que no sea vacio ("0", "Hola mundo", "false"), el objeto Date (new Date()).

// Volviendo al ejemplo, un arreglo vacio [] es truthy entonces se ejecuta la segunda parte de la expresion, osea, el string Im.

// Segunda expresi贸n a evaluar: En $"" && n t} nuevamente tenemos el operador de corto circuito &&, esta vez la primera parte de la expresi贸n es un valor falsy.

// Los valores falsy son: false, 0, "" (cualquier cadena vac铆a), undefined, null, NaN

// La primera parte de la expresi贸n es una cadena vac铆a que vendr铆a a representar un valor falsy y por ello la segunda parte de la expresi贸n n t no se ejecuta.

// En conclusi贸n, la respuesta es: Impossible! You should see a therapist after so much JavaScript lol
