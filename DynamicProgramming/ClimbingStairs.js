/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = [0, 1, 2]) {
    if(memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, cache) {
    cache = cache || [];
    if(cache[n]) return cache[n];
    if(n === 1) return 1;
    if(n === 2) return 2;
    else {
        cache[n] = climbStairs(n - 1, cache) +  climbStairs(n - 2, cache);
    }
    return cache[n];
};
console.log(climbStairs(6));