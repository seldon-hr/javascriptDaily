/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //Validaciones
    //Validación que resta de forma innecesaria.
    /* if(n <= 0){
        return null; //Return null, no cumple
    } */ 
    if(!head) return null; //No existe el caso completo

    //Creación de un caso tipo dummy, agregar un valor al inicio
    /* Crear data dummy es un proceso por el cual es complmentario para trabajar con esta como auxiliar.
    se compone para poder aquí usar el propio head como un nuevo valor dummy.head, así si
    n === head número de elementos, tenenemos que eliminar el caso head. */
    let dummy = new ListNode(0);
    dummy.next = head;

    //Crear brecha
    let slow = dummy;
    let fast = dummy; 
    let counter = 0; 
    while(counter <= n){ //Con esto nos vamos a detener uno antes.
        if(fast){
            fast = fast.next;
        }else {
            return null //No cumple
        }
        counter += 1;
    }

    //Mover ambos pointers
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }

    //Incrementar el slow a la posición que estamos saltando:
    /* Esto no esta indicando que nos encontramos que saltar después del elemento tal, y como arriba ya nos detuvivmos uno antes en counter <= n 
        aquí vamos a señalar que el nuevo valor que saltamos procede del siguiente de este
        slow
        slow.next
        slow.next.next
        slow.next nos apuntará a slow.next.next, así nos saltamos a slow.next acutal.
        */
    slow.next = slow.next.next;
    //fast = null
    //Devolver el último, ya que, dummy fue material auxiliar.
    return dummy.next; 
};