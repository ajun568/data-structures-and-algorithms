// 十进制转其它进制
import Stack from './index';

// 十进制转二进制
export const binaryConversion = (num: number) => {
  const stack = new Stack<number>();
  let binaryStr = '';

  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  while (!stack.isEmpty()) {
    binaryStr += stack.pop();
  }

  return binaryStr;
}

// 十进制转其它进制

export const baseConversion = (num: number, base: number) => {
  const stack = new Stack<number>();
  let binaryStr = '';
  let baseMap = '0123456789ABCDEF';

  while (num > 0) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }

  while (!stack.isEmpty()) {
    binaryStr += baseMap[stack.pop() as number];
  }

  return binaryStr;
}
