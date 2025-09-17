/* Encontar si es palíndromo en una linked-list 
234. Palindrome Linked List

    - Encontrar el punto medio.
- Separar ambas mitades.
- Invertir segunda mitad:
	- Uso de prev, current y nextTemporal
	Con esto tenemos que cambiamos el orden en el cual se están apuntando.
- Comparar ambas mitades:
	- left inicia en head, mientras que right inicia en prev de la inversión este queda como el último valor, porque current quedó como null, al llegar al final.
	- Mientras ninguno de los pointers sea null seguir comparando, así no importa si es un palíndomo impar o par, porque cuando el más corto llegue a null ya no se va a compar el carácter medio de la segunda mitad, esto en caso de ser impar.
- Si paso todos estos filtros, entonces si nos encontrasmos con que es un palíndromo.
*/
var isPalindromeLinkedList = function (head) {
    /* Casos edge */
    /* Podría quitar mejor el caso edge, no aplica, 
        A menos que sea si es solo head o solo null, sería devolver true.
    */

    /* Encontrar el punto medio */
    let prevSlow = null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        prevSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    /* Cortar ambas mtitades */
    if (prevSlow) {
        prevSlow.next = null;
    }

    /* Invertir la segunda mitad */
    let prev = null;
    let current = slow;
    let nextTemp = null;
    while (current != null) {
        nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    /* Comparar ambas mitades */
    let left = head; //Creo que si sería iniciar aquí
    let right = prev; //Termina en prev, porque current teriman siendo null. Entonces empezamos en prev.
    while (left != null &&  right != null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    /* Sí es palíndromo */
    return true;
}