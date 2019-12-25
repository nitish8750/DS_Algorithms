/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var obj = {};
for(var i=0; i<nums.length; i++){
    obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1;
}
if(nums.length === 1) return nums[0] + 1;
for(var j=0; j<nums.length; j++){
    if(!obj[j]) return j;
}
};


