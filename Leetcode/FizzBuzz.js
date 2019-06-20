//Write a program that outputs the string representation of numbers from 1 to n.
//But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var i=1;
    var arr = [];
    while(i <= n) {
       if(i % 3 === 0 && i % 5 === 0)  {
           arr.push("FizzBuzz");
       } else if(i % 3 === 0)  {
           arr.push("Fizz");
       } else if(i % 5 === 0 )  {
           arr.push("Buzz");
       } else {
           arr.push("" + i);
       }
        i++;
    }
    return arr;
};