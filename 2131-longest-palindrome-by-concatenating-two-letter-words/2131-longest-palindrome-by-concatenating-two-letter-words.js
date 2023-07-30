/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const map = {};
  const sameMap = {};
  let output = 0;

  words.forEach((word) => {
    const isSame = word[0] === word[1];

    const checkMap = isSame ? sameMap : map;
    const reverseValue = `${word[1]}${word[0]}`;
    if (checkMap[reverseValue] > 0) {
      checkMap[reverseValue] -= 1;
      output += 4;
    } else {
      if (checkMap[word]) checkMap[word] += 1;
      else checkMap[word] = 1;
    }
  });

  const sameMapKeys = Object.keys(sameMap);
  for (let i = 0; i < sameMapKeys.length; i++) {
    if (sameMap[sameMapKeys[i]] === 0) continue;

    output += 2;
    break;
  }
  return output;
};