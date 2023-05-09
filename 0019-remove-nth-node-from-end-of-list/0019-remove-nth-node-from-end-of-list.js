/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return null;
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  if (slow.next) slow.next = slow.next.next;

  return dummy.next;
};