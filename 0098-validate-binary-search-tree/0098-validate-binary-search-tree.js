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
const validateTree = (min, node, max) => {
  if (!node) return true;

  const isValid = min < node.val && node.val < max;
  if (!isValid) return false;

  return (
    validateTree(min, node.left, node.val) &&
    validateTree(node.val, node.right, max)
  );
};
var isValidBST = function(root) {
  if (!root) return false;

  return validateTree(Number.NEGATIVE_INFINITY, root, Number.POSITIVE_INFINITY);
};