/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let index = 0;
    let richest = 0;
    while(index < accounts.length){

        let j = 0;
        let count = 0;
        let customer = accounts[index];
        while(j < customer.length){
            
            count +=  customer[j];

            j += 1;
        }
        richest = Math.max(richest, count);
        index += 1;
    }
    return richest;
};