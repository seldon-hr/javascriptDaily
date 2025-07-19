/* Leer un string y devolver una lista de dos elementos.*/
function stringToSets(string) {
    //recorrer el string.
    return string.split(" ");
    //                  ⬆️ Convertir e ignorar este carácter de separación.
}
/* console.log(stringToSets("1 3")); */

function fileToSets(fileText) {
    console.log(fileText);
    //Recorresmos el contenido del archivo para poder separar en líneas
    const lines = fileText.split("\n");
    console.log(lines);
    // Cada línea la trasnformamos. 
    const lastArray = lines.map(line => {
        return stringToSets(line);
    });
    return lastArray;
}
console.log(fileToSets("1 2\n2 3\n4 5"));


/* Define a newEdge of the graph to have an adejecency list */
/* function newEdge(){
    let adejecencyList = new Map();
    adejecencyList.add('1', ["2"]);
    console.log(adejecencyList);
}

newEdge(); */