class Map {
  items: {[key: string]: unknown} = {};

  set(key: string, value: unknown) {
    this.items[key] = value;
  }

  get(key: string) {
    return this.items[key];
  }

  has(key: string) {
    return key in this.items;
  }

  remove(key: string) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }
}

export default Map;