/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var currentSum = 0, maxSum = nums[0];
    for(var i=0; i<nums.length; i++){
        currentSum = Math.max(nums[i],currentSum + nums[i]);
        if(currentSum > maxSum){
            maxSum = currentSum;
        } 
    }
    return maxSum;
};