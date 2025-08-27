let heights = [4, 1, 2, 1, 1]
/**
 * @param {number[]} height
 * @return {number}
 */
/* var trap = function(height) {
    let i = 0;
    let totalArea = 0;
    while (i < height.length) {
        let j = i + 1;
        if (height[i] === 0) {
            i += 1; 
            continue //Saltamos al siguiente no podemos acumular sin borde porque es 0.
        }
        if (height[j] < height[i]) { //Saltamos hasta que j lo iguale 
            j += 1;
            continue
        }

        let side = Math.min(height[i], height[j]);
        let area = side * side;
        totalArea += area;

        //Saltamos hasta que i sea j, o valle
        i = j;
    }
    return totalArea;
};
 */
/**
 * Second try
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxIzquierda = [];
    let maxDerecha = [];
    
    //Max altura izquierda
    let maxIzq = height[0];
    for (let i = 0; i < height.length; i++) {
        const element = height[i];
        if (maxIzq > element) {
            maxIzquierda.push(maxIzq);
        } else {
            maxIzquierda.push(element);
            maxIzq = element;
        }
    }

    //Max altura right
    let maxDer = height[height.length - 1];
    for (let i = height.length - 1; i >= 0; i--) {
        const element = height[i];
        if (maxDer > element) {
            maxDerecha[i] = maxDer
        } else {
            maxDerecha[i] = element
            maxDer = element;
        }
    }
    

    // Calcular áreas
    let totalArea = 0;
    let index = 0;
    while (index < height.length) {
        
        let alturaIzquierda = maxIzquierda[index];
        let alturaDerecha = maxDerecha[index];
        let alturaActual = height[index];

        totalArea += Math.min(alturaIzquierda, alturaDerecha) - alturaActual; 

        index += 1
    }

    return totalArea
    
};












console.debug(trap(heights));