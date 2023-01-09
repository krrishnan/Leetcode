/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let index = Math.floor(nums.length / 2);

  while (nums.length > 0) {
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const value = nums[middle];

    if (value === target) return index;

    if (value < target) {
      nums = nums.slice(middle + 1);
      const numsMiddle = Math.floor(nums.length / 2);
      index += numsMiddle + 1;
    }
    if (value > target) {
      nums = nums.slice(0, middle);
      const numsMiddle = Math.floor(nums.length / 2);
      index -= nums.length - numsMiddle;
    }
  }
  return -1;
};