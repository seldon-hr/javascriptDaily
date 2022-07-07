// ¿Qué devuelve el siguiente código?
function makeMulti(x) {
  return (y) => x * y;
}

const five = makeMulti(5);
const rta = five(6);
console.log(rta);
