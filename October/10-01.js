let Alimento = function (comida) {
    this.comida = comida;
};

Alimento.prototype.comerHoy = () => console.log('Hoy toca comer:', this.comida);
const alimento = new Alimento('ensalada');

alimento.comerHoy();

/* 
Una de las limitaciones de las arrow functions, es que no tiene sus propias referencias a this o super y
no se debe usar como métodos.

this siempre apuntará a this desde el contexto en el que definimos la función (ejemplo window).

Por tal razón, la función flecha () => { ... } no sabe de this.comida
*/