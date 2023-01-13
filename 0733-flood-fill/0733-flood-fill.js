/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const currentColor = image[sr][sc];
  if (currentColor === color) return image;

  const stack = [];
  image[sr][sc] = color;
  stack.push([sr, sc]);

  while (stack.length > 0) {
    const [row, col] = stack.pop();
    const existingColor = image[(row, col)];

    //Check 4 dimensions
    if (row > 0) {
      const top = image[row - 1][col];
      if (top === currentColor) {
        image[row - 1][col] = color;
        stack.push([row - 1, col]);
      }
    }
    if (row < image.length - 1) {
      const bottom = image[row + 1][col];
      if (bottom === currentColor) {
        image[row + 1][col] = color;
        stack.push([row + 1, col]);
      }
    }
    if (col > 0) {
      const left = image[row][col - 1];
      if (left === currentColor) {
        image[row][col - 1] = color;
        stack.push([row, col - 1]);
      }
    }
    if (col < image[0].length - 1) {
      const right = image[row][col + 1];
      if (right === currentColor) {
        image[row][col + 1] = color;
        stack.push([row, col + 1]);
      }
    }
  }
  return image;
};