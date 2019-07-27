/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var pascalArr = [];
    for(var i=0; i<numRows; i++){
        pascalArr.push([]);
        for(var j=0; j<numRows; j++){
            if(j === 0) {
                pascalArr[i][j] = 1;
            } else if(i === j) {
                pascalArr[i][j] = 1;
            }  else if(j < i){
                pascalArr[i][j] = pascalArr[i - 1][j - 1] + pascalArr[i - 1][j];
            } else {
                break;
            }
        }
    } 
    return pascalArr;
};


