/* 
Given two strings s and t, return true if t is an 
of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function (s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    return s === t
};

/* console.debug(isAnagram('anagram', 'nagaram'));
console.debug(isAnagram('rat', 'car')); */

/* Understanding singly-linked lists */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Método push
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

let listaLinked = new SinglyLinkedList();
listaLinked.push(2);
listaLinked.push(4);
listaLinked.push(3);
console.debug(listaLinked);

//Parece que si quisiera logs de todos sus productos, entonces tengo que hacer recursividad
// logging the singlyLinkedList
//Ejemplo con una linked list que si realmente tiene head, como principio.
let index = 0;
let lista = [];0
function printNode(node) {
    console.debug(`Node ${index}, Valor: ${node.val}`)
    index++
    lista.push(node.val);
    if (node.next) {
        printNode(node.next);
    }
}

printNode(listaLinked.head);
console.debug(lista);


/* ListNode, anidada por medio de los propios nodes. */

let list = [];

function addNode(node, list) {
    if (node) {
        list.push(node.val);
        addNode(node.next);
    } else {
        return list;
    }
}


/* de manera que tenemos que primero convertir la ListNode a una lista
y después converitr  */


