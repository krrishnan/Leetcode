/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const resultLength = rowLength * colLength;
  const visited = {};
  const result = [];

  let col = 0;
  let row = 0;

  const order = ["MOVE_RIGHT", "MOVE_DOWN", "MOVE_LEFT", "MOVE_UP"];
  let currentOrder = 0;

  while (result.length < resultLength) {
    result.push(matrix[row][col]);
    visited[`${row}_${col}`] = true;

    //MOVE_RIGHT
    if (currentOrder === 0) {
      const nextCol = col + 1;
      if (nextCol === colLength || visited[`${row}_${nextCol}`]) {
        //MOVE_DOWN
        currentOrder = 1;
        row += 1;
        continue;
      }
      col += 1;
    }
    //MOVE_DOWN
    if (currentOrder === 1) {
      const nextRow = row + 1;
      if (nextRow === rowLength || visited[`${nextRow}_${col}`]) {
        //MOVE_LEFT
        currentOrder = 2;
        col -= 1;
        continue;
      }
      row += 1;
    }
    //MOVE_LEFT
    if (currentOrder === 2) {
      const prevCol = col - 1;
      if (prevCol === -1 || visited[`${row}_${prevCol}`]) {
        //MOVE_UP
        currentOrder = 3;
        row -= 1;
        continue;
      }
      col -= 1;
    }
    //MOVE_UP
    if (currentOrder === 3) {
      const prevRow = row - 1;
      if (prevRow === -1 || visited[`${prevRow}_${col}`]) {
        //MOVE_RIGHT
        currentOrder = 0;
        col += 1;
        continue;
      }
      row -= 1;
    }
  }
    return result;
};