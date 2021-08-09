// leetcode 237. 删除链表中的节点

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const deleteNode = (node: ListNode | null): void => {
  if (!node) return;
  node.val = node.next?.val || 0;
  node.next = node.next?.next || null;
}

export default deleteNode;