/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var digitSum = 0 , carry = 0;
    for(var i = digits.length -1; i>=0; i--){
        if(i === digits.length -1){
            digitSum = digits[i] + 1 + carry;
        } else {
            digitSum = digits[i] + carry;
        }
        
        if(digitSum > 9) {
            carry = 1;
            digits[i] = 0;
        } else {
            carry = 0;
            digits[i] = digitSum;
        }
    }
    if(carry === 1) digits.unshift(1);
    return digits;
};