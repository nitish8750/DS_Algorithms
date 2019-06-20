/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i = 1, j = 0, maxProfit = 0;
    while(i < prices.length) {
        if(prices[i] > prices[j]){
            maxProfit = Math.max(maxProfit, prices[i] - prices[j]);
        } else {
           j = i;
        }
        i++
    }
    return maxProfit;
};