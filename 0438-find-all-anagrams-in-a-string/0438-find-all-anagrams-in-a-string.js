/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const checkIfAnagram = (sMap, pMap) => {
  const entries = Object.keys(pMap);
  for (let i = 0; i < entries.length; i++) {
    if (sMap[entries[i]] !== pMap[entries[i]]) return false;
  }
  return true;
};

var findAnagrams = function (s, p) {
  const output = [];
  const sLength = s.length;
  const pLength = p.length;

  const pMap = {};
  for (let i = 0; i < pLength; i++) {
    const character = p[i];
    let existingValue = pMap[character];
    pMap[character] = isNaN(existingValue) ? 1 : existingValue + 1;
  }

  const sMap = {};
  for (let i = 0; i < pLength; i++) {
    const character = s[i];
    let existingValue = sMap[character];
    sMap[character] = isNaN(existingValue) ? 1 : existingValue + 1;
  }
  const isAnagram = checkIfAnagram(sMap, pMap);
  isAnagram && output.push(0);

  for (let i = 1; i <= sLength - pLength; i++) {
    const prevValue = s[i - 1];
    const nextValue = s[i + pLength - 1];
    sMap[prevValue] = sMap[prevValue] - 1;
    sMap[nextValue] = isNaN(sMap[nextValue]) ? 1 : sMap[nextValue] + 1;
    const isAnagram = checkIfAnagram(sMap, pMap);
    isAnagram && output.push(i);
  }
  return output;
};