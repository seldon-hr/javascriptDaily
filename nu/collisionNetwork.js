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




/* Vamos a implementar la solución para identificar si se encuentran en la misma red 
Como hemos armado un grafo, necesitamos un método de búsqueda, en este caso deepFirstSearch
*/

function isSameNetwork(nodeA, nodeB, adejecencyList) {
    //En este set vamos a almacenar los nodos que ya fueron visitados o revisado.
    const visited = new Set();
    
    //Cremos la función y lo que buscamos es tratar de llegar al nodoB desde el nodeA
    function deepFirstSearch(node) { //El nodo en el que nos encontremos.

        if (node === nodeB) { // el nodo actual es igual al que queremos alcanzar?
            return true; // si pertenece a esta red.
        }
        visited.add(node); //no, lo agregamos como este node ya fue revisado.

        for (const neighbor of adejecencyList.get(node) || []) { // Vamos a recorrer cada uno de los valores del grafo según su key. 
            if (!visited.has(neighbor)) { // El vecino acutal no ha sido visitado, 
                if (deepFirstSearch(neighbor)) { //no, la función se llama recursivamente.
                    return true; // nos devuleve true, entonces son vecinos, pertenecen a la misma red.
                }
            }
        }

        return false; // entonces, no se pusede llegar al nodeB desde el nodeA, no pertenecen a la misma colisión
    }
    return deepFirstSearch(nodeA); //Excepción el nodeA y el nodoB es el mismo nodo.
}



console.log(isSameNetwork('1', '3', graph)); // true
console.log(isSameNetwork('1', '5', graph)); // false
console.log(isSameNetwork('4', '5', graph)); // true
console.log(isSameNetwork('3', '6', graph)); // false (6 no existe)