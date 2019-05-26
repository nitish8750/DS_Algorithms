// Write a recursive function called capitalizeWords. Given an array of words, return a new array 
// containing each word capitalized.

function capitalizeWords(arr){
    var results = [];
    let helperFunc = arr => {
        if(arr.length === 0) return ; 
        results.push(arr[0].toUpperCase());
        helperFunc(arr.slice(1));
    }
    helperFunc(arr);
    return results;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

