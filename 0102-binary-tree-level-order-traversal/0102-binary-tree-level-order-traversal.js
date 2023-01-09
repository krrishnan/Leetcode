/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const stack = [];
  const output = [];
  if (!root) return output;

  output.push([root.val]);
  stack.push([root]);

  while (stack.length > 0) {
    const nodeArray = stack[stack.length - 1];
    const subArray = [];
    const subStack = [];

    stack.pop();
    for (let i = 0; i < nodeArray.length; i++) {
      const node = nodeArray[i];
      if (node.left) subArray.push(node.left.val);
      if (node.right) subArray.push(node.right.val);

      if (node.left) subStack.push(node.left);
      if (node.right) subStack.push(node.right);
      
    }

    if (subArray.length > 0) {
      output.push(subArray);
      stack.push(subStack);
    }
  }
  return output;

};