// ¿Cuál de estos métodos modifica el array original?
const emojis = ['✨', '🥑', '😍'];
emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');

/*
Splice es un método de arreglos capaza de agregar, eliminar o remplazar items.
El resto de los métodos son usados en programación funcional y por ende son inmutables.



*/