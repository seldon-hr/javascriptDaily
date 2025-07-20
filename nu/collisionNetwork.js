/* Leer un string y devolver una lista de dos elementos.*/
function stringToSets(string) {
    //recorrer el string.
    return string.split(" ");
    //                  ⬆️ Convertir e ignorar este carácter de separación.
}


function fileToSets(fileText) {
    console.log(fileText);
    //Recorresmos el contenido del archivo para poder separar en líneas
    const lines = fileText.split("\n");
    console.log(lines);
    // Cada línea la trasnformamos. 
    const lastArray = lines.map(line => {
        return stringToSets(line);
    });
    console.log(lastArray);
    return lastArray;
}



/* Defibne cada arista de los nodos, cada uno con quien tiene relación.
Mi versióon
*/

function newEdge(adejecencyList, edge) {
    const [a, b] = edge;


    if (!adejecencyList.has(a)) {
        adejecencyList.set(a, new Set());
    }
    adejecencyList.get(a).add(b);

    if (!adejecencyList.has(b)) {
        adejecencyList.set(b, new Set());
    }

    adejecencyList.get(b).add(a);

}

/* newEdge(adejecencyList, ['1', '2']);
newEdge(adejecencyList, ['2', '3']);
newEdge(adejecencyList, ['4', '5']); */

/*  
    Cuando newEdge lo hace por cada array, mientras que aquí iteramos en el resultado
    que nos estará devolviendo fileToSets, array de arrays.
*/

function edgesToAdjecenyList(edges) {
    const adejecencyList = new Map();
    
    for (const edge of edges) {
        newEdge(adejecencyList, edge);
    }

    return adejecencyList
}


const file = "1 2\n2 3\n4 5";
const edges = fileToSets(file);
const graph = edgesToAdjecenyList(edges);
console.log(graph);




/* Vamos a implementar la solución para identificar si se encuentran en la misma red */
/* 
function isSameNetwork(a, b, adejecencyList,) {
    
    if () {
        
    } else {
        
    }

}
 */


