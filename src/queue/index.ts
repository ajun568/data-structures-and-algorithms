class Queue<T> {
  protected items: T[] = [];

  enqueue(...elements: T[]) {
    this.items.push(...elements);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

export default Queue;
