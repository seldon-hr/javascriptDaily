const value = { number: 10};

const multiply = (x = { ...value}) => {
    console.log((x.number*= 2));
}

multiply();
multiply();
multiply(value);
multiply(value);

/* 
Hay que concetrarse en el orden en que se llaman las funciones para poder comprender que es lo que pasa acá.

Primear llamada: A multiply no le pasamos ningún parámetro, por ende, toma el parámetro por defecto x qu es un
objteto desestructurado cuya key number tiene el valor de 10. Entonces x.number *= 2 nos retorna 20.

Segunda llamada: Similar a la primera llamada, hacesmos lo mismo, entonces obtenemos nuevamente 20.

Tercera llamada: A multiply en su llamada le pasamamos el argumento value por lo que la función ahora ignora
el parámetro por defecto. number nuevamente es 10, por ello el resultado de la multiplicación nuevamente será 20.

Cuarta llamada: Similar a la tercera llamada, pero el valor de value actual es 20 que fue el resultado de la tercera
llamada, entonces ahora x.number *= 2, será 40.
*/