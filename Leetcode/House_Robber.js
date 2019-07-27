/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var maxMoney = [];
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    maxMoney[0] = nums[0];
    maxMoney[1] = Math.max(nums[0], nums[1]);
    for(var i=2; i<nums.length; i++){
        maxMoney[i] = Math.max(maxMoney[i - 1], nums[i] + maxMoney[i - 2]);
    }
    
    return Math.max.apply(null, maxMoney);
};