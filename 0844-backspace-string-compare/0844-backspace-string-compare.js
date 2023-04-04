/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const removeBackSpace = (str) => {
  while (str.indexOf("#") !== -1) {
    const backSpaceIndex = str.indexOf("#");
    if (backSpaceIndex === 0) {
      str = str.slice(1);
    } else {
      str = str.slice(0, backSpaceIndex - 1) + str.slice(backSpaceIndex + 1);
    }
  }
  return str;
};
var backspaceCompare = function(s, t) {
    const newS = removeBackSpace(s);
    const newT = removeBackSpace(t);
    console.log("NEW", newS,newT)
    return newS === newT;
};