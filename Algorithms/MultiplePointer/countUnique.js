// Write a function which accepts a sorted array, and count the unique values in the array.

function countUnique(arr){
    if(arr.length === 0) return 0;
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return i+1;
}

console.log(countUnique([1,2,2,2,3,3,3,4,4,5,7,7,10,10,13,13]));