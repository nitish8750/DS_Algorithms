/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = [0, 1, 2]) {
    if(memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

console.log(climbStairs(6));