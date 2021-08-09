// leetcode 2. 两数相加
// 大数 new Big

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
  let num1 = '';
  let num2 = '';
  let current1 = l1;
  let current2 = l2;

  while (current1) {
    num1 = `${current1.val}${num1}`;
    current1 = current1.next;
  }
  while (current2) {
    num2 = `${current2.val}${num2}`;
    current2 = current2.next;
  }

  let sum = (Number(num1) + Number(num2)) + '';
  let current = null;
  for (let i = 0; i < sum.length; i++) {
    current = new ListNode(+sum[i], current);
  }

  return current;
};

export default addTwoNumbers;
