/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const grid = Array.from(Array(m), () => Array(n));
  const rowEnd = m - 1;
  const colEnd = n - 1;
  grid[rowEnd][colEnd] = 1;

  for (let row = rowEnd; row >= 0; row--) {
    for (let col = colEnd; col >= 0; col--) {
      const isRightExists = col < colEnd;
      const isDownExists = row < rowEnd;
      const r = isRightExists ? grid[row][col + 1] : 0;
      const d = isDownExists ? grid[row + 1][col] : 0;
      if (!grid[row][col]) grid[row][col] = r + d;
    }
  }
  return grid[0][0];
};