var addTwoNumbers = function(l1, l2) {
    let number1 = l1.reverse().join('');
    let number2 = l2.reverse().join('');
    let sum = parseInt(number1) + parseInt(number2);
    return sum.toString().split('').reverse();
};
console.debug(addTwoNumbers([2,4,3], [5,6,4]));
console.debug(addTwoNumbers([0], [0]));
console.debug(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

/* let singly = new  */