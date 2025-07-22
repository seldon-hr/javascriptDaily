/* Given an array of strings strs, group the

together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other. */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let arrayFinal = []
    let mapaVisited = new Map();
    strs.forEach(word => {
        let key = word.split('').sort().join('');
        if (mapaVisited.has(key)) {
            mapaVisited.get(key).push(word);
           
        } else {
            mapaVisited.set(key, [word]);
        }
    });
    
    arrayFinal = Array.from(mapaVisited.values());

    return arrayFinal;
};

console.debug(groupAnagrams(strs));

