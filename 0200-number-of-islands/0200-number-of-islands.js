/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
 const rowsLength = grid.length;
  const colsLength = grid[0].length;
  const visited = {};
  let isLandCount = 0;

  const checkAdjacentLands = (row, col, grid) => {
    const queue = [[row, col]];
    let queueIndex = 0;

    while (queueIndex < queue.length) {
      const currentRow = queue[queueIndex][0];
      const currentCol = queue[queueIndex][1];
      const prevRowAvailable = currentRow - 1 >= 0;
      const nextRowAvailable = currentRow + 1 < rowsLength;
      const prevColAvailable = currentCol - 1 >= 0;
      const nextColAvailable = currentCol + 1 < colsLength;

      if (prevRowAvailable) {
        const key = `${currentRow - 1} ${currentCol}`;
        const value = grid[currentRow - 1][currentCol];
        if (value === "1")
          !visited[key] && queue.push([currentRow - 1, currentCol]);
        visited[key] = true;
      }
      if (nextRowAvailable) {
        const key = `${currentRow + 1} ${currentCol}`;
        const value = grid[currentRow + 1][currentCol];
        if (value === "1")
          !visited[key] && queue.push([currentRow + 1, currentCol]);
        visited[key] = true;
      }
      if (prevColAvailable) {
        const key = `${currentRow} ${currentCol - 1}`;
        const value = grid[currentRow][currentCol - 1];
        if (value === "1")
          !visited[key] && queue.push([currentRow, currentCol - 1]);
        visited[key] = true;
      }
      if (nextColAvailable) {
        const key = `${currentRow} ${currentCol + 1}`;
        const value = grid[currentRow][currentCol + 1];
        if (value === "1")
          !visited[key] && queue.push([currentRow, currentCol + 1]);
        visited[key] = true;
      }
      queueIndex++;
    }
  };

  for (row = 0; row < rowsLength; row++) {
    for (col = 0; col < colsLength; col++) {
      const key = `${row} ${col}`;
      const value = grid[row][col];

      if (visited[key]) continue;
      visited[key] = true;
      if (value === "0") continue;
      isLandCount++;
      checkAdjacentLands(row, col, grid);
    }
  }
  return isLandCount;
};