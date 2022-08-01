function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }
  return message;
}
console.log(checkAge(21)); //🤔?

// Respuesta Correcta: C) ReferenceError
// const tiene scope de bloque para las variables, cuando intentamos hacer return message la variable message no puede ser accedida. Tanto message en el bloque if como en el else son variables diferentes por que estan en bloques diferentes pese a que se llaman igual. 
// Como no es posible acceder a la variable la respuesta es ReferenceError.
