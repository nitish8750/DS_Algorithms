/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr = [];
    arr[0] = "1";
    arr[1] = "11"
    for(var i=2; i<n; i++){
        var currentStr = "";
        var prevStr = arr[i - 1];
        var count = 0;
        for(var j=1; j<=prevStr.length; j++){
            if(prevStr[j] !== prevStr[j-1]){
                count++;
                currentStr += count;
                currentStr += prevStr[j-1];
                count = 0;
            } else {
                count++
            }
        }
        arr[i] = currentStr;
    }
    return arr[n - 1];
};