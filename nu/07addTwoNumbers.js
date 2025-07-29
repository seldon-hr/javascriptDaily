/* var addTwoNumbers = function(l1, l2) {
    let number1 = l1.reverse().join('');
    let number2 = l2.reverse().join('');
    let sum = parseInt(number1) + parseInt(number2);
    return sum.toString().split('').reverse();
};
console.debug(addTwoNumbers([2,4,3], [5,6,4]));
console.debug(addTwoNumbers([0], [0]));
console.debug(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); */

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
y después hacer la suma y por último volver a convertir la lista en una
ListNode.  */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    /* Convertir ListNode to List */
    function addNode(list, node) {
        if (node) {
            list.push(node.val);
            return addNode(list, node.next);
        } else {
            return list;
        }
    }
    let list1 = addNode([], l1);
    let list2 = addNode([], l2);

    /* Sum of the values */
    let number1 = list1.reverse().join('');
    let number2 = list2.reverse().join('');
    let sum = parseInt(number1) + parseInt(number2);
    sum = sum.toString().split('').reverse().map(Number);

    /* Convert sum to ListNode */
    function arrayToListNode(list) {
        let firstNode = new ListNode();
        let currentPosition = firstNode;
        for (let val of list) {
            currentPosition.next = new ListNode(val);
            currentPosition = currentPosition.next
        }
        return firstNode.next;
    };
    sum = arrayToListNode(sum);
    

    return sum;
};