/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dayBuy = 0;
    let daySell = dayBuy + 1;
    let maxProfit = 0;

    while (daySell < prices.length) {
        if (prices[daySell] < prices[dayBuy]) {
            //Cada día que hay un precio más bajo, entonces tomar ese día como el mejor día de compra.
            dayBuy = daySell;
        } else {
            let profit = prices[daySell] - prices[dayBuy];
            if (maxProfit < profit) {
                maxProfit = profit;
            }
        }
        daySell++
    }

    return maxProfit
};


console.debug(maxProfit([7, 1, 5, 3, 6, 4]));