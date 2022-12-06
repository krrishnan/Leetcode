/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const length = nums.length;
    let sum = 0;
    const runningSum = nums.map(num => {sum +=  num; return sum})
    return runningSum;
};