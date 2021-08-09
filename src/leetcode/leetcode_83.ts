// leetcode 83. 删除排序链表中的重复元素

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  let current = head;
  let previous: ListNode | null = null;
  let repeat = -Infinity;
  while (current) {
    if (current.val !== repeat) {
      repeat = current.val;
      previous = current;
      current = current.next;
    } else {
      (previous as ListNode).next = current.next;
      current = current?.next || null;
    }
  }

  return head;
}

export default deleteDuplicates;
