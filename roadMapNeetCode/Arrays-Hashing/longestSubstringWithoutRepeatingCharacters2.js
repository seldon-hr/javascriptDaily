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

    console.log(`\n🔍 Iniciando análisis de la cadena: "${s}"`);
    console.log('='.repeat(50));

    for (let i = 0; i < s.length; i++) {
        console.log(`\n📍 Paso ${i + 1}: Procesando carácter '${s[i]}' en posición ${i}`);
        console.log(`   Estado inicial: left=${left}, ventana actual=[${Array.from(mapaLetters).join(',')}]`);
        
        // Verificar si hay duplicado
        if (mapaLetters.has(s[i])) {
            console.log(`   ⚠️  DUPLICADO encontrado: '${s[i]}' ya existe en la ventana`);
        }
        
        while (mapaLetters.has(s[i])) {
            console.log(`   🗑️  Eliminando '${s[left]}' de posición ${left}`);
            mapaLetters.delete(s[left]);
            left++;
            console.log(`   ➡️  Moviendo left a ${left}, ventana=[${Array.from(mapaLetters).join(',')}]`);
        }
        
        mapaLetters.add(s[i]);
        const currentSize = i - left + 1;
        maxSize = Math.max(maxSize, currentSize);
        
        console.log(`   ✅ Agregando '${s[i]}' a la ventana`);
        console.log(`   📊 Ventana actual: [${Array.from(mapaLetters).join(',')}] (posiciones ${left}-${i})`);
        console.log(`   📏 Tamaño actual: ${currentSize}, Máximo hasta ahora: ${maxSize}`);
        console.log(`   🪟 Subcadena actual: "${s.slice(left, i + 1)}"`);
    }

    console.log('\n' + '='.repeat(50));
    console.log(`🎯 RESULTADO FINAL: ${maxSize}`);
    return maxSize;
};

let s = 'pwwkew';

console.debug(lengthOfLongestSubstring(s));