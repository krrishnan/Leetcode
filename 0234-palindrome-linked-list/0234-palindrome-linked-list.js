/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let values = "";
  let dummy = head;
  while (dummy) {
    values += dummy.val;
    dummy = dummy.next;
  }

  while (values) {
    const first = values[0];
    const last = values[values.length - 1];
    if (first === last) {
      values = values.slice(1, values.length - 1);
    } else {
      return false;
    }
  }
  return true;
};