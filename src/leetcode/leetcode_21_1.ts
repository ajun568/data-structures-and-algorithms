// leetcode 21. 合并两个有序链表
// 可执行, 代码看起来不够简洁

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  let current1 = l1;
  let current2 = l2;
  let mergeHead = new ListNode();
  let mergeCurrent: ListNode | null = mergeHead;

  while ((current1 || current2) && mergeCurrent) {
    if (current1 && current2) {
      if (current1.val <= current2.val) {
        mergeCurrent.next = new ListNode(current1.val);
        current1 = current1.next;
      } else {
        mergeCurrent.next = new ListNode(current2.val);
        current2 = current2.next;
      }
    } else {
      if (current1) {
        mergeCurrent.next = new ListNode(current1.val);
        current1 = current1.next;
      }
      else if (current2) {
        mergeCurrent.next = new ListNode(current2.val);
        current2 = current2.next;
      }
    }

    mergeCurrent = mergeCurrent.next;
  }

  return mergeHead.next;
};

export default mergeTwoLists;
