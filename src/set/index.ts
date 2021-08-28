class Set {
  items: {[key: string]: unknown} = {};

  add(element: any) {
    if (this.has(element)) return false;

    this.items[element] = element;
    return true;
  }

  delete(element: any) {
    if (!this.has(element)) return false;

    delete this.items[element];
    return true;
  }

  has(element: any) {
    return this.items.hasOwnProperty(element);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }
}

export default Set;
