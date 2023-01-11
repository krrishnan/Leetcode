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
 * @return {boolean}
 */
const inorder = (node, result) => {
  node.left && inorder(node.left, result);
  result.push(node.val);
  node.right && inorder(node.right, result);
};
var isValidBST = function(root) {
  if (!root) return false;
  let result = [];
  inorder(root, result);

  for (let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) return false;
  }
  return true;
};