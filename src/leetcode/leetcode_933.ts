// 933. 最近的请求次数

import Queue from '../queue';

class RecentCounter {
  private items = new Queue<number>();

  ping(t: number) {
    while (t - this.items.peek() > 3000) {
      this.items.dequeue();
    }
    this.items.enqueue(t);

    return this.items.size();
  }
}

export default RecentCounter;
