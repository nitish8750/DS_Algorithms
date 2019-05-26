// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in. You solution must have 
// time complexity of O(n) and space complexity of O(n).

function areThereDuplicates(){
    let obj = {};
    for(let i=0; i<arguments.length; i++){
        obj[arguments[i]] = (obj[arguments[i]] || 0) + 1;
    }
    console.log(obj);
    for(let key in obj){
        if(obj[key] > 1) return false;
    }

    return true;
}

console.log(areThereDuplicates('n', 0, 'a', 'Z', 0));