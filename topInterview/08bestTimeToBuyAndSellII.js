/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dayBuy = 0;
    let daySell = 1;
    let maxProfit = 0;

    while (daySell < prices.length) {
        if (prices[daySell] < prices[daySell - 1]) {
            maxProfit += prices[daySell - 1] - prices[dayBuy];
            dayBuy = daySell
        } 
        daySell++

    }
    if (prices[daySell - 1] > prices[dayBuy]) {
        maxProfit += prices[daySell -1] - prices[dayBuy]
    }
    return maxProfit;
};

console.debug(maxProfit([1, 2, 3, 1, 4, 5, 0, 3]));