/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) return head;

  let result = new ListNode(0);
  let lastNode = result;

  let odd = head;
  let even = head.next;

  while (odd) {
    const next = new ListNode(odd.val, null);
    lastNode.next = next;
    lastNode = lastNode.next;
    if (odd.next) odd = odd.next.next;
    else break;
  }
  while (even) {
    const next = new ListNode(even.val, null);
    lastNode.next = next;
    lastNode = lastNode.next;
    if (even.next) even = even.next.next;
    else break;
  }

  return result.next;
};