// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;
    for(let i = 0; i < n; i++){
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;
    for(let i=n; i<arr.length; i++){
        tempSum = tempSum - arr[i - n]+ arr[i];
        if(maxSum < tempSum) maxSum = tempSum;
    }

    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));


