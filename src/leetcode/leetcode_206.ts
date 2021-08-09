// leetcode 206. 反转链表

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  let current = head;
  let previous = null;
  
  while (current) {
    let node = previous;
    previous = current;
    current = current.next;
    previous.next = node;
  }

  return previous;
};

export default reverseList;
