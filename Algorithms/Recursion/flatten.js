// Write a recursive function called flatten which accepts an array of arrays and returns a new array 
// with all values flattened.

function flatten(arr){
    let result = [];
    let helperFn = arr => {
        if (arr.length === 0) return;
        if (Array.isArray(arr[0])) helperFn(arr[0]);
        else result.push(arr[0]);
        return helperFn(arr.slice(1));
    }
    helperFn(arr);
    return result;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]], [4,[5,[6,[7,[9]]]]],[67,[7,[2,[5,[7,[8,[9]]]]]]]]));