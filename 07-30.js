// Explica este código JavaScript 😬

function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };
compareMembers(person);

// Respuesta Correcta: B) They are the same!
// Tanto el parámetro person1 como person2 adoptará el valor de person, osea el objeto { name: "Lydia" }.

// Los objetos se pasan por referencia. En el ejemplo, person1 y person2 apuntan a la misma dirección de memoria entonces 
// la condición del if no se cumple y pasamos a imprimir 
// They are the same!.

// Dentro hac sentido que ambos objetos tomen el valor de 'person', ya que, ambos toman solo un parámetro que fue recibido al momento de ser ejecutado.
