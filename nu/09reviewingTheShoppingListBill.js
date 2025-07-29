/* En el siguiente ejercicio vamos a realizar free call, de lo que fue la prueba de 
shopping list bill, el cual consiste en lo siguiente

Dada una lista de productos como array Productos = [[10, d0, d1], [24, d1, EMPTY], [100, EMPTY, d1]], el cual puede ser n. 
*detalle, nos falta ver como entra si tiene dos descuentos. [10, d0, d1] y el número del descuento en el descuento como item.
tenemos una lista base de descuentos = [[d0, 35], [d1, 10], [d2, 2]]

!Tipos de descuentos
d0: Descontar cantidad
d1: Descontar porcentaje
d2: Precio ya con descuento, no hacer nada

Como se observa tenemos los productsos, esta es una lista y en primera instancia tenemos las siguientes consideraciones
1 - el precio del producto
2 - el tag de descuento
3 - cantidad o porcentaje según el tag.
Empty Tag o missing tag, es lo mismo, no hay descuento.

El próposito es necesario sacar la cuenta final de los productos respecto a sus descuentos. 
Hablamos de una función que recibe dos listas. products, discounts.

Reglas
- El precio por producto, debe ser el más bajo, si un descuento de un producto que vale 10, uno termina en 4, y otro en 5, entonces escoger el de valor menor.
- Retornar la suma total.
*/

/* Input */
const products = [
  ["10", "d0", "d1"],
  ["15", "EMPTY", "EMPTY"],
  ["20", "d1", "EMPTY"]
];
const discounts = [
  ["d0", "1", "0.27"],  // tipo 1: 27% off → 10 * 0.73 = 7.3 → round = 7
  ["d1", "2", "5"]      // tipo 2: -5 → 10 - 5 = 5
];

/* Código */

function calculateSum(products, discounts) {
    let total = 0;
    
    products.forEach(item => {
        console.debug('Producto', item)
        let originalPrice = parseFloat(item[0]);
        let minimalPrice = originalPrice;
     

        for (let index = 1; index < item.length; index++) {
            let tag = item[index];
            // Caso donde no hay discounts
            if (tag === 'EMPTY' || !tag) continue;

            
            let discountItem = discounts.find(d => d[0] === tag);
            if (!discountItem) continue;

            let typeDiscount = parseInt(discountItem[1]);
            let amouuntDisocunt = parseFloat(discountItem[2]);
            let discount;

            switch (typeDiscount) {
                case 0:
                    discount = amouuntDisocunt;
                    break;
                case 1:
                    discount = originalPrice * ( 1 - amouuntDisocunt);
                    break;
                case 2:
                    discount = originalPrice - amouuntDisocunt;
                    break;
                default:
                    break;
            }

            // Caso de descontar cual es el precio menor
            if (discount < minimalPrice) {
                minimalPrice = discount
            }

         }
        total += Math.round(minimalPrice);
    });



    return total;
}

console.debug(calculateSum(products, discounts));