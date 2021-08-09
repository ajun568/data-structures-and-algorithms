// leetcode - 225 用队列实现栈

import Queue from '../queue/index';
class MyStack<T> {
  private items = new Queue<T>();

  push(item: T) {
    this.items.enqueue(item);
    for (let i = 1; i < this.items.size(); i++) {
      this.items.enqueue(this.items.dequeue() as T);
    }
  }

  pop() {
    return this.items.dequeue();
  }

  peek() {
    return this.items.peek();
  }

  isEmpty() {
    return this.items.isEmpty();
  }
}

export default MyStack;
