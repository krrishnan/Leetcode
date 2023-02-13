/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getMaxChars = (charMap) => {
  const keys = Object.keys(charMap);
  let max = 0;
  keys.forEach((key) => {
    if (charMap[key] > max) max = charMap[key];
  });
  return max;
};
var characterReplacement = function(s, k) {
    let firstPointerIndex = 0;
  let lastPointerIndex = 0;
  let maxWindowLength = 0;
  const charMap = {};
  charMap[s[0]] = 1;

  while (lastPointerIndex < s.length) {
    const windowLength = lastPointerIndex - firstPointerIndex + 1;
    const maxChars = getMaxChars(charMap);
    const isValidWindow = windowLength - maxChars <= k;
    if (!isValidWindow) {
      const key = s[firstPointerIndex];
      charMap[key] = charMap[key] - 1;
      firstPointerIndex += 1;
      continue;
    }

    lastPointerIndex += 1;
    const key = s[lastPointerIndex];
    charMap[key] = charMap[key] ? charMap[key] + 1 : 1;
    if (windowLength > maxWindowLength) maxWindowLength = windowLength;
  }
  return maxWindowLength;
};