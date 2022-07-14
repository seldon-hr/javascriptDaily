// Explica este código JavaScript 😎

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
}, 0);

// Respuesta Correcta: A) 🥑
// Al llamar a getStatus debemos tener el cuenta el scope de las variables, recuerda que tanto let como const tienen scope de bloque,
// }por ende buscara una variable status dentro del bloque de data y regresara el emoji de palta.
