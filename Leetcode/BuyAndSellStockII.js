/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var profit = 0;
     for(var i=1; i<=prices.length; i++){
         if(prices[i] - prices[i - 1] > 0){
             profit = profit + prices[i] - prices[i - 1];
         }
     }
     return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));