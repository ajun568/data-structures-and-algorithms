// 32. 最长有效括号
import Stack from '../stack/index';

const longestValidParentheses = (str: string) => {
  const stack = new Stack<number>();
  let maxLen = 0;
  let bottom: number | undefined = undefined;
  for (let i = 0; i < str.length; i++) {
    if (stack.isEmpty() && str[i] === ')') bottom = undefined;

    if (str[i] === '(') {
      if (bottom === undefined) bottom = i - 1;
      stack.push(i);
    }

    if (!stack.isEmpty() && str[i] === ')') {
      stack.pop();
      let len = i - (stack.peek() ?? bottom);
      if (len > maxLen) maxLen = len;
    }
  }
  return maxLen;
}

export default longestValidParentheses;
