// Write a function called sameFrequency. Given two positive numbers, 
// find out if the two numbers have the same frequency of digits. 
// Your solution must have time complexity of O(n).

function sameFrequency(num1, num2){
    let numObj1 = {};
    let numObj2 = {};
    while(num1 > 0){
        let digit = num1 % 10;
        numObj1[digit] = (numObj1[digit] || 0) + 1;
        num1 = Math.floor(num1 / 10);
    }
    while(num2 > 0){
        let digit = num2 % 10;
        numObj2[digit] = (numObj2[digit] || 0) + 1;
        num2 = Math.floor(num2 / 10);
    }
    console.log(numObj1);
    console.log(numObj2);
    for(let key in numObj1){
        if(!(key in numObj2)) return false;
        if(numObj1[key] !== numObj2[key]) return false;
    }
    return true;
}

console.log(sameFrequency(333777111222, 2233311777));