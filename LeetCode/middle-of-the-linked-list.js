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

//내코드
var middleNode = function (head) {
  let answer;
  let count = 0;
  let start = head;
  while (start) {
    count++;
    start = start.next;
  }

  let index;
  if (count % 2 === 0) index = Math.ceil(count / 2) + 1;
  else index = Math.ceil(count / 2);
  start = head;
  count = 0;
  while (start) {
    count++;
    if (count === index) {
      answer = start;
      break;
    }
    start = start.next;
    // console.log(start);
  }
  return answer;
};

//정답코드
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //하나의 진행을 2배로 하는 아이디어
  return slow;
};
