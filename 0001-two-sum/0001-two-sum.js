/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!isNaN(map[target - num])) return [i, map[target - num]];
     map[num] = i;
  }  
};