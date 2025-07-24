/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/* El número de patrones es el número de provincias */
/* Pensando que el problema era por patrónes, pero no. */
// var findCircleNum = function (input) {
//     let mapaProvincias = new Map();
//     input.forEach(ciudad => {
//         /* Adjuntar el patrón */
//         let pattern = ciudad.join('');
//         /* Asignar cada patrón al mapa, con el número de veces que este. */
//         if (mapaProvincias.has(pattern)) {
//             let numeroPatterns = mapaProvincias.get(pattern);
//             numeroPatterns + 1;
//         } else {
//             mapaProvincias.set(pattern, 1);
//         }
//     });
//     let numeroProvincias = Array.from(mapaProvincias.values());
//     console.debug(mapaProvincias);
//     return numeroProvincias.length;
// };

/* LLegar a un mapa por números. */
var findCircleNum = function (input) {
    let mapaProvincias = new Map();
    let numeroCiudad = 1;
    input.forEach(ciudad => {
        let numeroRelaciones = 1;     
        ciudad.forEach(relacion => {

            if (relacion === 1) {
                if (mapaProvincias.has(numeroCiudad) ) {
  
                    mapaProvincias.get(numeroCiudad).push(numeroRelaciones);
                } else {
                    mapaProvincias.set(numeroCiudad, [numeroRelaciones]);
                }
            }
            numeroRelaciones++;
        });
        numeroCiudad++;

    });

    //Transformar a provincias (conjuntos)
    let provincias = new Set();
    let visited = new Set();
    mapaProvincias.forEach((relacionesCiudades, ciudad) => {
        if (visited.has(ciudad)) {
            return;
        } else {
            visited.add(ciudad);
            let provincia = new Set();
            provincia.add(ciudad);

            function isConnected(relacionesCiudades) {
                relacionesCiudades.forEach((c) => {
                    
                    if (!visited.has(c)) {
                        provincia.add(c);
                        visited.add(c);
                        isConnected(mapaProvincias.get(c));
                    } 
                });
            }

            isConnected(relacionesCiudades);

            if (provincia.size > 0) {
                provincias.add(provincia);
            }
        }   
        
    });
    console.debug('Visitadas',visited);
    console.debug('Provincias: ',provincias);
    
   

    return provincias.size;
};








let dosProvincias = [[1, 0, 0], [0, 1, 1], [0, 1, 1]];
let unaProvincia = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
let tresProvincias = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
let unaProvinciaConCuatroCiudades = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]
console.debug(findCircleNum(dosProvincias));
console.debug(findCircleNum(dosProvincias));
console.debug(findCircleNum(unaProvincia));
console.debug(findCircleNum(tresProvincias));
console.debug(findCircleNum(unaProvinciaConCuatroCiudades));