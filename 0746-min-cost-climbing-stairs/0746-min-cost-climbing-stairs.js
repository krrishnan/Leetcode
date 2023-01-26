/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const costLength = cost.length;
  cost[costLength] = 0;
  const result = new Array(costLength);
  result[costLength] = cost[costLength - 1];

  for (let i = costLength - 1; i >= 0; i--) {
    const currentCost = cost[i];
    const oneStepCost = result[i + 1];
    const twoStepCost = i + 2 < costLength ? result[i + 2] : 0;
    result[i] = currentCost + Math.min(oneStepCost, twoStepCost);
  }
  return Math.min(result[0], result[1]);
};