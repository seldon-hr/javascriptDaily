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
var findNthElementFromEnd = function(head, n) {
    //Validaciones
    if(n <= 0){
        return null; //Return [], no cumple
    } 
    if(!head || !head.next) return null; //No existe el caso completo

    //Crear brecha
    slow = head;
    fast = head;
    counter = 0;
    while(counter < n){
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

    //fast = null
    return slow;
};