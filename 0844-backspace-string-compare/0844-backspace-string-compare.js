/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const removeBackSpace = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const isBackSpace = str.charAt(i) === "#";
    if (isBackSpace) {
      newStr = newStr.slice(0, newStr.length - 1);
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
};
var backspaceCompare = function(s, t) {
    return removeBackSpace(s) === removeBackSpace(t);
};