// 优先队列
import Queue from './index';

interface PriorityProps<T> {
  element: T;
  priority: number;
}

class PriorityQueue<T> extends Queue<PriorityProps<T>> {
  enqueue(...elements: PriorityProps<T>[]) {
    elements.forEach(item => {
      if (this.isEmpty()) {
        this.items.push(item);
        return;
      }

      let isTail = true;
      for (let i = 0; i < this.size(); i++) {
        if (item.priority < this.items[i].priority) {
          this.items.splice(i, 0, item);
          isTail = false;
          break;
        }
      }
      if (isTail) this.items.push(item);
    })
  }
}

export default PriorityQueue;
