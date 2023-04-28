/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const rowCount = grid.length;
  const colCount = grid[0].length;
  const ballCount = colCount;

  const getBallValue = (row, col) => {
    while (row < rowCount) {
      const currentValue = grid[row][col];

      if (currentValue === 1) {
        const nextColumn = col + 1;
        if (nextColumn === colCount) return -1; //END
        if (currentValue !== grid[row][nextColumn]) return -1; //V found
        col++;
      }
      if (currentValue === -1) {
        const prevColumn = col - 1;
        if (prevColumn < 0) return -1; //END
        if (currentValue !== grid[row][prevColumn]) return -1; //V found
        col--;
      }
      row++;
    }
    return col;
  };

  const result = [];
  for (let ball = 0; ball < ballCount; ball++) {
    //FIND THE BALL;
    const row = 0;
    const col = ball;
    result.push(getBallValue(row, col));
  }
  return result;
};