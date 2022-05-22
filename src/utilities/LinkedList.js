class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add (element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFrom (index) {
    if (index < 0) {
      return Error('Invalid value. Try with a positive value');
    } else if (index >= this.size) {
      return Error(`There are just ${this.size} nodes. Try with smaller values`);
    } else if (!Number.isInteger(index)) {
      return Error('Invalid value. Try with a integer number');
    }

    if (index === 0) {
      const aux = this.head.next;
      this.head = aux;
    } else {
      let i = 0;
      let curr = this.head;
      let prev;

      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      prev.next = curr.next;

      if (curr.next === null) {
        this.tail = prev;
      }
      this.size--;
    }
  }

  getFrom (index) {
    let i = 0;
    let curr = this.head;

    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  getHead () { return this.head; }

  getTail () { return this.tail; }

  getSize () { return this.size; }
}

export { LinkedList, Node };
