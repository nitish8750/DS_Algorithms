//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var obj = {}
    for(var i=0; i< nums.length; i++){
        obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1;
    }
    for(var key in obj) {
        if(obj[key] === 1){
            return key;
        }
    }
};