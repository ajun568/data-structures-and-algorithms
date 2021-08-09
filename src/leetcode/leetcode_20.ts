// leetcode - 20 有效的括号

import Stack from '../stack/index';
export const isValid = (str: string): boolean => {
  const stack = new Stack();
  const strMap: any = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i of str) {
    if (['(', '[', '{'].includes(i)) {
      stack.push(i);
    }
    if (strMap[i]) {
      if (strMap[i] === stack.peek()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.size() === 0;
}
