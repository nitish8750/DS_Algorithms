// Write a recursive function factorial to calculate factorial of the given number

function factorial(num){
    if(num < 1) return 0;
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(-6));