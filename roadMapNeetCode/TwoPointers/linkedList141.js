function hasCycle(head) {
    // Si no hay nodos o solo hay uno sin next
    if (!head || !head.next) return false;
    
    // Inicializar punteros
    let slow = head;
    let fast = head.next; //Tomar el valor doble, se va a mover lo doble de rápido
    
    // Loop - ¿qué condiciones necesitas?
    while (fast && fast.next) { //Para la asignación debe existir fast y fast.next
        slow = slow.next; //Avanzamos uno
        fast = fast.next.next; //Avanazmos dos
        
        if (slow === fast) {  //¿Con el nodo que esta apuntando?
            return true;
        }
    }
    
    return false;
}