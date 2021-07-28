class Node<T> {
  element: T | null;
  next: Node<T> | null;

  constructor(element: T | null) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private length = 0;

  append(element: T) {
    let node = new Node<T>(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position >= this.length) return false;
    
    let node = new Node<T>(element);
    let index = 0;
    let current = this.head;
    let previous: Node<T> | null = null;

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current && index++ < position) {
        previous = current;
        current = current.next;
      }
      (previous as Node<T>).next = node;
      node.next = current;
    }

    this.length++;
    return true;
  }

  removeAt(position: number) {
    if (!this.head || position < 0 || position >= this.length) return false;

    let index = 0;
    let current: Node<T> | null = this.head;
    let previous: Node<T> | null = null;

    if (position === 0) {
      this.head = this.head.next;
    } else {
      while (current && index++ < position) {
        previous = current;
        current = current.next;
      }
      (previous as Node<T>).next = current?.next || null;
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
