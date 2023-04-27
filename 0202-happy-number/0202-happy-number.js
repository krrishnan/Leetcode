/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let newNum = n.toString();
  const visited = {};

  while (!visited[newNum]) {
    visited[newNum] = true;

    let sum = 0;
    for (let i = 0; i < newNum.length; i++) {
      const digit = parseInt(newNum[i]);
      sum += digit * digit;
    }
    newNum = sum.toString();
  }

  if (parseInt(newNum) === 1) return true;
    return false;
};