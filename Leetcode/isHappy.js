/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var number = n, sum = 0, digitsArr= [], obj = {n : 1};
     while(number > 0){
         digitsArr = number.toString().split('') ;
         if(sum === 1){
             return true;
         }else {
             sum = 0;
             for(var i=0; i<digitsArr.length; i++){
                 sum = sum + Math.pow(parseInt(digitsArr[i]),2);
             }
             if(!obj[sum]){
                 obj[sum] = 1;
             } else {
                 return false;
             }
             number = sum;
         }
     }
     return false;
 };