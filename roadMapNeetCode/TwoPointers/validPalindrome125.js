/* 
    Valid Palindrome 125
    Primero necesitamos que este se le remueven los carácteres alfanúmericos y espacios
    y ahora si comparar valores. left, right
*/
/**
 * @param {string} s
 * @return {boolean}
 */
/* Empleando el uso de replace and split, pero esto crean copias, memoria extra. */
/* var isPalindrome = function(s) {
    //Eliminar todo aquello que no sea alfanumérico.
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let arrayString = s.split("");
    let left = 0;
    let right = arrayString.length -1;
    while(left <= right){
        if(arrayString[left] !== arrayString[right]){
            return false
        }
        left += 1
        right -= 1
    }
    return true
}; */


/* Sin crear copias extras in-place */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (/[^a-z0-9]/.test(s[left])) {
            left++
            continue; //Saltar el resto del código.
        }
        if (/[^a-z0-9]/.test(s[right])) {
            right--
            continue;
        }

        /* Comparar posteriormente */
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();

        if (leftChar !== rightChar) {
            return false;
        }
        
        left++;
        right--;
    }
    return true;
}


console.debug(isPalindrome('Anita lava la tina'));
console.debug(isPalindrome('Juan'));
console.debug(isPalindrome('Reconocer.'))
console.debug('------')
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
