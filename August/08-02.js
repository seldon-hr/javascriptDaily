// Explica este código JavaScript 😬

const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);

// Respuesta Correcta: A) ["🍕", "🍫", "🥑", "🍔"]
// Tenemos un arreglo food y un objeto info independiente uno del otro. info solo tiene la propiedad favoriteFood que apunta al índice 0 del arreglo food, por lo tanto info seria igual a:

//   const info = { favoriteFood: "🍕"}  


// Posteriormente pisamos o sobre escribimos este valor modifiando el emoji de pizza por uno de spaguetti:

//   info.favoriteFood = "🍝"  


// Ahora info se ve así:

//   const info = { favoriteFood:"🍝"}  


// En ningún momento modificamos de ninguna manera el array food, por ende sigue siendo el mismo: ["🍕", "🍫", "🥑", "🍔"]
