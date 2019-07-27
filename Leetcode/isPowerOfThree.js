/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n, cache) {
    cache = cache || [];
    if(cache[n]) return cache[n];
    if(n === 3 || n === 1 )  return true;
    if(n < 3) return false;
    else {
        cache[n] =  n % 3 === 0 && isPowerOfThree(n / 3, cache);
    } 
    return cache[n]
};