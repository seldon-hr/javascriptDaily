// Explica este cรณdigo JavaScript ๐

var status = '๐';

setTimeout(() => {
  const status = '๐';

  const data = {
    status: '๐ฅ',
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
}, 0);

// Respuesta Correcta: A) ๐ฅ
// Al llamar a getStatus debemos tener el cuenta el scope de las variables, recuerda que tanto let como const tienen scope de bloque,
// }por ende buscara una variable status dentro del bloque de data y regresara el emoji de palta.
