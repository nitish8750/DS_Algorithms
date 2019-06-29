/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
      const j = target - nums[i];
      if(obj[j] || obj[j] == 0){
        return [obj[j], i];
      }
      obj[nums[i]] = i;
    }
     return [];
  };