//Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var arr = s.split('');
    var result = 0;
    for(var i=0; i< arr.length; i++){
        var excelNum = arr[i].charCodeAt() - 64;
        result = result + Math.pow(26, arr.length - i - 1) * excelNum;
    }
    return result;
};