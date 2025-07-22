/* Given an array of strings strs, group the

together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other. */

let stringsArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let conjuntoMayor = [];
    for (let index = 0; index < strs.length; index++) {
        const word = strs[index];

        let cojuntoPerWord = [];
        let wordAsArray = (word.split(""));




        
       conjuntoMayor.push(cojuntoPerWord);
    }
    return conjuntoMayor;
};

console.debug(groupAnagrams(stringsArray));



let arrayB = ['bat'];
let arrayA = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let arrayT = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let resultBAT = [[arrayB], [arrayA], [arrayT]];
/* console.debug(resultBAT) */

function returnFullArray(resultBAT) {
    let arrayMaster = [];


    resultBAT.forEach(lista => {

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