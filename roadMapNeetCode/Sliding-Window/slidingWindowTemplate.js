
var slidingWindow = function (input, considerations) {
    let left = 0
    let result = 0
    let tracker = {} /* new Map(), new Set() */ //Who stores.

    for (let right = 0; right < input.length; right++) { //Expands
        /* Add input[right] to window */

        /* While window is invalid: */
        while (/* Condition based on considerations */) { //Shrinks
            /* Remove input[left] from window */
            /* Move left+= 1 */
        }

        /* Update result (windos is valid now) */
    }
    return result;
}