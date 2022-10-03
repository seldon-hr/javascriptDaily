function greeting() {
    throw 'Hey, this was throw';
}

function sayHi() {
    try {
        const data = greeting();
        console.log('It worked,', data);
    } catch (error) {
        console.log('Oh no an error', error);
    }
}

sayHi();

/* 
    La función greeting con la palabra reservada throw genera una
    excepción de tipo string en el código.

    La función sayHi consta de una sentencia try...catch, recordemos que
    si no hay ningún tipo de excepción del código ejecuta el bloque try pero
    como si generamos una excepción entonces entramos al blooque catch donde el
    parámetro adopta el valor de la excepción, osea, Hello word!
*/