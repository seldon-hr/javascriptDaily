/* Encontar si es palíndromo en una linked-list */
var isPalindromeLinkedList = function (head) {
    /* Casos edge */
    if (!head && !head.next) {
        return false;
    }

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
    prevSlow.next = null;

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
    let right =  //¿dónde lo inicio?
    while (left != null &&  right != null) {
        if (left !== right) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    /* Sí es palíndromo */
    return true;
}