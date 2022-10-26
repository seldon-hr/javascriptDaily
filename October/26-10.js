/* ¿Cuál de estos métodos modifica el array original? */
const emojis = ['✨', '🥑', '😍'];
emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');

/* 
Output splice

    splice es un método mutable de arreglos capaza de agregar, eliminar o reemplazar los items.
    El resto de los métodos son usados mucho en programación funcional y por ende son inmutables.
*/