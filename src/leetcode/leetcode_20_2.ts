// leetcode - 20 有效的括号
// 栈 + map

export const isValid = (str: string): boolean => {
  let stack: string[] = [];
  const map = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ]);

  for (let i of str) {
    if (map.has(i)) {
      stack.push(i);
    } else {
      const peek = stack[stack.length - 1];
      if (map.get(peek) === i) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
