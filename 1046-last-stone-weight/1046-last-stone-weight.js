/**
 * @param {number[]} stones
 * @return {number}
 */
const getMax1AndMax2 = (stones) => {
  let max1 = { index: 0, value: stones[0] };
  let max2 = { index: 0, value: 0 };
  for (i = 1; i < stones.length; i++) {
    if (stones[i] > max1.value) {
      max2 = { ...max1 };
      max1.value = stones[i];
      max1.index = i;
      continue;
    }
    if (stones[i] > max2.value) {
      max2.index = i;
      max2.value = stones[i];
    }
  }
  return { max1, max2 };
};
const removeObliteratedStones = (stones) => {
  const newStones = [];
  stones.forEach(
    (stoneWeight) => stoneWeight > 0 && newStones.push(stoneWeight)
  );
  return newStones;
};
var lastStoneWeight = function(stones) {
  let newStones = [...stones];
  while (newStones.length > 1) {
    const { max1, max2 } = getMax1AndMax2(newStones);
    newStones[max2.index] = 0;
    newStones[max1.index] = max1.value - max2.value;
    newStones = removeObliteratedStones(newStones);
  }
  return newStones.length === 1 ? newStones[0] : 0;
};