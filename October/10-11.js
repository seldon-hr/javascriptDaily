function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
  }
//   getItems(["banana", "apple"], "pear", "orange"); //🤔?
console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

  /*  
    Cuando vemos en la lista de parámetros de una función la sintaxis de tres puntos
    ... nos referimos a lo que se denomina un parámetro de tipo REST. En el cuerpo de la función este tipo
    de parámetro se trata como un arreglo pero siempre debe estar declarado al final de la lista de parámetros, caso
    contrario tendremos un errror de sintaxis.

    Si volvemos a escribir la función pero esta vez teniendo en cuenta lo anterior dicho:

    function getItems(fruitList, favoriteFruit, ...args) {
        return [...fruitList, ...args, favoriteFruit]
    }
    console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

    Obtenemos por consola: ['banana', 'apple', 'pear', 'orange']

  */