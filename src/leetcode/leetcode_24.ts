// leetcode 24. 两两交换链表中的节点

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  let previous: ListNode | null = null;
  let current = head;
  let index = 0;
  while (current && current.next) {
    previous = current;
    current = current.next;

    if (index === 0) {
      previous.next = current.next;
      current.next = previous;
      head = current;
    }

    if (index > 0 && current.next) {
      let node = current;
      current = current.next;
      node.next = current.next;
      previous.next = current;
      current.next = node;
    }

    current = current.next;
    index++;
  }

  return head;
}

export default swapPairs;
