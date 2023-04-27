/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const wordsCount = {};
  words.forEach((word) => {
    if (wordsCount[word] === undefined) wordsCount[word] = 1;
    else wordsCount[word] = wordsCount[word] + 1;
  });
  const newWordsCount = { ...wordsCount };
  const entries = Object.entries(wordsCount);
  const wordsInDescOrder = entries
    .sort((a, b) => {
      if (b[1] === a[1] && b[0] > a[0]) return -1;
      return b[1] - a[1];
    })
    .map((entry) => entry[0]);

  return wordsInDescOrder.splice(0, k);
};