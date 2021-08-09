// 239. 滑动窗口最大值
// test6~8
// 最终版

class Queue<T> {
  protected items: T[] = [];

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[0];
  }

  tail() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const maxSlidingWindow = (nums: number[], k: number) => {
  const queue = new Queue<number>();
  let maxArr: number[] = [];
  nums.forEach((item, index) => {
    while (!queue.isEmpty() && item >= nums[queue.tail()]) {
      queue.pop();
    }
    queue.enqueue(index);
    if (queue.peek() <= index - k) queue.dequeue();
    if (index >= k - 1) maxArr.push(nums[queue.peek()]);
  })
  return maxArr;
}

export default maxSlidingWindow;
