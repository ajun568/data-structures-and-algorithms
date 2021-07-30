// 单向循环链表
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

    if (!this.head) {  // 链表为空
      this.head = node;
      node.next = this.head;
    }
    
    else { // 链表不为空
      let current = this.head;
      let index = 0;
      while (++index < this.length) {
        current = current.next as Node<T>;
      }
      current.next = node;
      node.next = this.head;
    }

    this.length++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position > this.length) return false;
    
    let node = new Node<T>(element);
    let index = 0;
    let current = this.head;
    let previous: Node<T> | null = null;

    if (position === 0) { // 插入头部
      if (this.head) { // 链表不为空
        node.next = this.head;
        while (current && ++index < this.length) {
          current = current.next;
        }
        (current as Node<T>).next = node;
        node.next = this.head;
        this.head = node;
      }
      
      else { // 链表为空
        this.head = node;
        node.next = this.head;
      }
    }

    else if (position === this.length - 1) { // 插入尾部
      while (current && ++index < this.length) {
        current = current.next;
      }
      (current as Node<T>).next = node;
      node.next = this.head;
    }
    
    else { // 插入其它位置
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

    if (position === 0) { // 删除头部
      if (this.length === 1) { // 仅有头节点
        this.head = null;
      }
      
      else {
        this.head = this.head.next;
        while (current && ++index < this.length) {
          current = current.next;
        }
        (current as Node<T>).next = this.head;
      }
    }

    else if (position === this.length - 1) {
      while (current && ++index < this.length - 1) {
        current = current.next;
      }
      (current as Node<T>).next = this.head;
    }
    
    else {
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

    while (current && index < this.length) {
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
