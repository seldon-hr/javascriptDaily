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

console.debug(isAnagram('anagram', 'nagaram'));
console.debug(isAnagram('rat', 'car'));