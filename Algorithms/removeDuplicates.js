/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i=0, j=1;
   while(i < j && j<nums.length){
       if(nums[i] !== nums[j]){
           i++;
           var temp = nums[i]
          nums[i]  = nums[j];
           nums[j] = temp;
       }
       j++;
   }
   return i + 1;
};