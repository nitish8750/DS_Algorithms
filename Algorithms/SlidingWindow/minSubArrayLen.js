// Write a function called minSubArrayLen which accepts two parameters - an array of positive  
// integers and a posititve integer. This function should return the minimal length of a contiguous 
// subarray of which the sum is greater than or equal to the integer passwed to the function. If there 
// isn’t one, return 0 inestead.

function minSubArrayLen(nums, sum){
    let total=0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;

    while(start < nums.length){
        if(total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if(total >= sum ){
            minLength = Math.min(minLength, end - start)
            total -= nums[start]
            start++;
        } else {
            break;
        }
    }
    return minLength == Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));