function pivot(arr, start = 0, end = arr.length){
   const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    let pivotIndex = start;
    for(let i = start + 1; i < end; i++){
        if(arr[start] > arr[i]){
            pivotIndex ++;
            swap(arr, pivotIndex, i);
        }
    }
    swap(arr, start, pivotIndex);
    console.log(arr);
    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivot = pivot(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

console.log(pivot([9,3,8,2,1,5,7,6,4]));
