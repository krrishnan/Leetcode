/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfArray = (nums) => {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const pivotIndex = function (nums) {
  let pivotIndex = -1;
  const numsLength = nums.length;

  for (let i = 0; i < numsLength; i++) {
    const leftSubArray = nums.slice(0, i);
    const rightSubArray = nums.slice(i + 1);

    const leftSubArraySum = sumOfArray(leftSubArray);
    const rightSubArraySum = sumOfArray(rightSubArray);

    if (leftSubArraySum === rightSubArraySum) {
      pivotIndex = i;
      break;
    }
  }
  return pivotIndex;
};
