//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i=0, j=0;
    while(i < nums.length){
        if(nums[i] !== 0){
            nums[j] = nums[i];
            j++;
        } 
        i++;
    }
    while(j < nums.length){
        nums[j] = 0;
        j++;
    }
    return nums;
};