// 双向链表
class Node<T> {
  element: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(element: T | null) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length = 0;

  append(element: T) {
    let node = new Node<T>(element);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position > this.length) return false;

    let node = new Node<T>(element);
    
    if (position === 0) {
      if (this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
        this.tail = node;
      }
    }
    
    else if (position === this.length) {
      (this.tail as Node<T>).next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    
    else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;

      while (current && index++ < position) {
        previous = current;
        current = current.next;
      }

      (previous as Node<T>).next = node;
      node.next = current;
      (current as Node<T>).prev = node;
      node.prev = previous;
    }

    this.length++;
  }

  removeAt(position: number) {
    if (!this.head || position < 0 || position >= this.length) return false;

    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        (this.head as Node<T>).prev = null;
      }
    }

    else if (position === this.length - 1) {
      this.tail = (this.tail as Node<T>).prev;
      (this.tail as Node<T>).next = null;
    }

    else {
      let current: Node<T> | null = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (current && index++ < position) {
        previous = current;
        current = current.next;
      }
      if (!previous || !current) return false;
      previous.next = current.next;
      (current.next as Node<T>).prev = previous;
    }

    this.length--;
    return true;
  }

  indexOf(element: T) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (typeof current.element === 'object') {
        if (JSON.stringify(element) === JSON.stringify(current.element)) return index;
      } else {
        if (element === current.element) return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  remove(element: T) {
    let position = this.indexOf(element);
    return this.removeAt(position);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

export default LinkedList;
