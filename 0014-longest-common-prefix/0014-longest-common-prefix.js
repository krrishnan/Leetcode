/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "";
  let strIndex = 0;
  if (strs.length === 0) return result;

  while (true) {
    const char = strs[0][strIndex];
    if (!char) return result;
    const isEveryTrue = strs.every((str) => str[strIndex] === char);
    if (!isEveryTrue) return result;
    result += char;
    strIndex += 1;
  }
};