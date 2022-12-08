/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  let visited = "";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const curr = s.charAt(i);
    const index = visited.indexOf(curr);
    if (index === -1) {
      visited += curr;
    } else {
      result = curr + result + curr;
      visited = visited.replace(curr, "");
    }
  }

  if (visited) {
    const sliceIndex = result.length / 2;
    const before = result.slice(0, sliceIndex);
    const after = result.slice(sliceIndex);
    result = before + visited.charAt(0) + after;
  }
  return result.length;
};