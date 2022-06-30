//¿Qué imprime el siguiente código?
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin); //🤔?

// Respuesta Correcta: B) { admin: true, name: "Lydia", age: 21 }
