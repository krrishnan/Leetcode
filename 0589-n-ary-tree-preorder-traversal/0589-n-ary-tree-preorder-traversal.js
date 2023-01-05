/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const getValues = (node, result) => {
  result.push(node.val);
  const children = node.children;

  for (let i = 0; i < children.length; i++) {
    getValues(children[i], result);
  }
};
var preorder = function(root) {
    if(!root) return [];
    const result = [];
  getValues(root, result);
    return result;
};