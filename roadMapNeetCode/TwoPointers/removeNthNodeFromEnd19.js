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
    if(n <= 0){
        return null; //Return [], no cumple
    } 
    if(!head) return null; //No existe el caso completo

    //Creación de un caso tipo dummy, agregar un valor al inicio
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
    slow.next = slow.next.next;
    //fast = null
    //Devolver el último, ya que, dummy fue material auxiliar.
    return dummy.next; 
};