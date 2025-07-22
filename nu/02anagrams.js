/* Given an array of strings strs, group the

together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other. */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {

    let mapaGrafo = transformarLettersToMapRelation(strs);
    
    console.debug(mapaGrafo);
};

console.debug(groupAnagrams(strs));


function transformarLettersToMapRelation (strs) {
    let mapaLetras = new Map();
    strs.forEach(word => {
        let wordPerLetters = word.split("");

        wordPerLetters.forEach(letter => {

            if (mapaLetras.has(letter)) {
                let mapaLetrasAux = mapaLetras.get(letter);
                
                let existeEnMapaPalabra = mapaLetrasAux.some(w => w === word);
                if (!existeEnMapaPalabra) {
                    mapaLetrasAux.push(word);
                }
                mapaLetras.set(letter, mapaLetrasAux);
            } else {
                //Agregar por primera ocasión.
                mapaLetras.set(letter, [word]);
            }
        });
    });
    return mapaLetras;
}


/* Ahora parte media
Recibo esto:
Map(5) {
  'e' => [ 'eat', 'tea', 'ate' ],
  'a' => [ 'eat', 'tea', 'tan', 'ate', 'nat', 'bat' ],
  't' => [ 'eat', 'tea', 'tan', 'ate', 'nat', 'bat' ],
  'n' => [ 'tan', 'nat' ],
  'b' => [ 'bat' ]
}

Salida
let resultBAT = [[arrayB], [arrayA], [arrayT]];
*/



let arrayB = ['bat'];
let arrayA = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let arrayT = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let resultBAT = [[arrayB], [arrayA], [arrayT]];
/* console.debug(resultBAT) */








function returnFullArray(resultBAT) {
    let arrayMaster = [];


    resultBAT.forEach(lista => {
        //Acceder a cada uno de la lista.
        let listaF = lista[0];
        listaF.forEach(word => {
            console.debug('Palabra a checar', word)
            let seEncuentraTodos = resultBAT.every(list => list[0].some(w => w === word));
            console.debug(`Resultado de consulta de: ${word}`, seEncuentraTodos);
            if (seEncuentraTodos) {
                const seEncuentraEnLista = arrayMaster.some(wF => wF === word);
                if (!seEncuentraEnLista) {
                    arrayMaster.push(word);
                }
            }
        })
    });
    return arrayMaster;
}
console.debug('here we are:', returnFullArray(resultBAT));