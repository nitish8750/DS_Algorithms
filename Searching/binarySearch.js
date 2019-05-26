function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]) end = middle -1
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2,4,6,8,10,23,34,45,56,67,78], 10));