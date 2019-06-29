/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    for(var i=0; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1;
    }
    
    for(var key in obj){
        if(obj[key] > 1) return true;
    }
    return false;
};