// leetcode - 232 用栈实现队列

import Stack from '../stack/index';

class MyQueue<T> {
  private items = new Stack<T>();

  enqueue(item: T) {
    if (this.items.isEmpty()) {
      this.items.push(item);
      return;
    }

    const _stack = new Stack<T>();
    while (!this.items.isEmpty()) {
      _stack.push(this.items.pop() as T);
    }
    _stack.push(item);

    while (!_stack.isEmpty()) {
      this.items.push(_stack.pop() as T);
    }
  }

  dequeue() {
    return this.items.pop();
  }

  peek() {
    return this.items.peek();
  }

  isEmpty() {
    return this.items.isEmpty();
  }
}

export default MyQueue;
