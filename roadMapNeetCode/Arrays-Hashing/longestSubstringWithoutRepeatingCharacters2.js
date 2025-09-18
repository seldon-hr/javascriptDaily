/* 
    Funcionamiento paso a paso:

Expansión: El índice i expande la ventana hacia la derecha
Contracción: Si encuentra un carácter duplicado (mapaLetters.has(s[i])):
Elimina caracteres desde la izquierda (pointer) hasta que no haya duplicados
Mueve el pointer hacia la derecha
Actualización: Agrega el carácter actual al Set y actualiza maxSize
    Ejemplo con s = 'pwwkew':
    p: ventana [p], tamaño = 1
    w: ventana [p,w], tamaño = 2
    w: duplicado encontrado → elimina p, ventana [w], tamaño = 1
    k: ventana [w,k], tamaño = 2
    e: ventana [w,k,e], tamaño = 3
    w: duplicado encontrado → elimina hasta llegar a ventana [k,e,w], tamaño = 3
    Resultado: 3 (subcadena "wke")


*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    
    /* Casos edge */
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    /* Variables */
    let mapaLetters = new Set();
    let left = 0;
    let maxSize = 0;

    for (let i = 0; i < s.length; i++) {
        
        while (mapaLetters.has(s[i])) {
            mapaLetters.delete(s[left]);
            left++;
        }
        mapaLetters.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }


    return maxSize;
};

let s = 'pwwkew';

console.debug(lengthOfLongestSubstring(s));