/* Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
Notes
Don't forget to return the result.
If you're stuck, find help in the Resources tab.
If you're really stuck, find solutions in the Solutions tab. */


function findPerimeter(length, width) {
  perimeter = (length*2) + (width*2);
  return perimeter;
}

/* Power Calculator
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
Notes
Requires basic calculation of electrical circuits (see Resources for info). */

function circuitPower(voltage, current) {
  power = voltage * current;
  return power;
}


/* Bitwise Operations
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
Notes
JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.
 */
function bitwiseAND(n1, n2) {
	result = n1 & n2;
	return result;
}

function bitwiseOR(n1, n2) {
		result = n1 | n2;
		return result;
}

function bitwiseXOR(n1, n2) {
		result = n1 ^ n2;
		return result;
}
function bitwiseAND(n1, n2) {
  result = n1 & n2;
  return result;
}
​
function bitwiseOR(n1, n2) {
    result = n1 | n2;
    return result;
}
​
function bitwiseXOR(n1, n2) {
    result = n1 ^ n2;
    return result;
}