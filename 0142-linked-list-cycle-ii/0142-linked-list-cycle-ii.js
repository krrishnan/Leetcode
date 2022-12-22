/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;

  let curr = head;
  const visitedArray = [];
  while (curr.next) {
    const indexOfCurrentNode = visitedArray.findIndex((node) => curr === node);
    if (indexOfCurrentNode >= 0) return visitedArray[indexOfCurrentNode];

    visitedArray.push(curr);
    curr = curr.next;
  }
  return null;
};