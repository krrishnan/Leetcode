/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let newNums = [...nums];
  let index = Math.floor(newNums.length / 2);

  while (newNums.length > 0) {
    console.log("NEW NUMS", newNums);
    console.log("INDEX", index);
    const length = newNums.length;
    const middle = Math.floor(length / 2);
    const value = newNums[middle];

    if (value === target) return index;

    if (value < target) {
      newNums = [...newNums.slice(middle + 1)];
      const newNumsMiddle = Math.floor(newNums.length / 2);
      index += newNumsMiddle + 1;
    }
    if (value > target) {
      newNums = [...newNums.slice(0, middle)];
      const newNumsMiddle = Math.floor(newNums.length / 2);
      index -= newNums.length - newNumsMiddle;
    }
  }
  return -1;
};