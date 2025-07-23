/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/* El número de patrones es el número de provincias */
var findCircleNum = function (input) {
    let mapaProvincias = new Map();
    input.forEach(ciudad => {
        /* Adjuntar el patrón */
        let pattern = ciudad.join('');
        /* Asignar cada patrón al mapa, con el número de veces que este. */
        if (mapaProvincias.has(pattern)) {
            let numeroPatterns = mapaProvincias.get(pattern);
            numeroPatterns + 1;
        } else {
            mapaProvincias.set(pattern, 1);
        }
    });
    let numeroProvincias = Array.from(mapaProvincias.values());
    console.debug(mapaProvincias);
    return numeroProvincias.length;
};


let dosProvincias = [[1, 0, 0], [0, 1, 1], [0, 1, 1]];
let unaProvincia = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
let tresProvincias = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
let cuatroCiudades = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
console.debug(findCircleNum(dosProvincias));
console.debug(findCircleNum(unaProvincia));
console.debug(findCircleNum(tresProvincias));
console.debug(findCircleNum(cuatroCiudades));