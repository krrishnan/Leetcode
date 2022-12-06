/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;

  let min = prices[0];
  let max = 0;
  let profit = 0;

  for (let i = 0; i < prices.length ; i++) {
    if (prices[i] < min) {
      const diff = max - min;
      profit = diff > profit ? diff : profit;
      min = prices[i];
      max = 0;
      continue;
    }
    if (prices[i] > max) max = prices[i];
  }
  profit = max - min > profit ? max - min : profit;

  return profit <= 0 ? 0 : profit;
};