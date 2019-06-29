// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

//Input: [3,2,3]
//Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj = {};
    for(var i=0; i< nums.length; i++){
        obj[nums[i]]  = obj[nums[i]] ? ++obj[nums[i]] : 1;
    }
    var maxValue = Math.max.apply(null, Object.values(obj));
      for(var key in obj)  {
          if(obj[key] === maxValue){
              return key;
          }
      }
};