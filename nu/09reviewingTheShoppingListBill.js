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

/* Código */

function calculateSum(products, discounts) {
    let total = 0;
    
    products.forEach(item => {
        let originalPrice = item[0];
        let discount = 0;
        let amouuntDisocunt = discounts[0];
        let porcentage = discounts[1];


        switch (discounts[2]) {
            case d0:
                discount = originalPrice * 10 / porcentage;
                break;
            case d1:
                discount = originalPrice - amouuntDisocunt;
                break;
            case d2:
                discount = originalPrice;
                break;
            default:
                break;
        }

        // Caso de descontar cual es el precio menor
        if (condition) {
            
        }


        total = total + Math.round(discount);
    });



    return total;
}