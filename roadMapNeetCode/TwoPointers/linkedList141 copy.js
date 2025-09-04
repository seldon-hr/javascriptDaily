function findMiddle(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head.next; //Iniciemos como el doble de slow.
    
    while (fast && fast.next) {
        //Avanzamos uno y el doble.
        slow = slow.next;
        fast = fast.next.next;
    }
    //Retonar el medio, porque cuando fast sea null, entonces slow esta en el medio.
    return slow;
}