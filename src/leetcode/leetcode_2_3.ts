// leetcode 2. 两数相加

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null => {
  let current1 = l1;
  let current2 = l2;
  let carryOver = 0;
  let sum: ListNode = new ListNode();
  let current: ListNode | null = sum;

  while (current1 || current2) {
    let currentSum = (current1?.val || 0) + (current2?.val || 0) + carryOver;
    carryOver = 0;

    if (currentSum >= 10) {
      carryOver = 1;
      currentSum -= 10;
    }

    current.next = new ListNode(currentSum);

    current1 = current1?.next || null;
    current2 = current2?.next || null;
    current = current.next;
  }

  if (carryOver > 0) current.next = new ListNode(carryOver);

  return sum.next;
};

export default addTwoNumbers;
