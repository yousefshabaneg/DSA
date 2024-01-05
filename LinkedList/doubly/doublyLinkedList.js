class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.back = null;
  }
}

class LinkedListIterator {
  constructor(node) {
    this.currentNode = node;
  }

  data() {
    return this.currentNode.data;
  }

  next() {
    this.currentNode = this.currentNode.next;
    return this;
  }

  current() {
    return this.currentNode;
  }
}

class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  insertAfter(nodeData, data) {
    const node = this.find(nodeData);
    if (!node) return;

    const newNode = new LinkedListNode(data);
    newNode.next = node.next;
    newNode.back = node;
    node.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    } else {
      newNode.next.back = newNode;
    }
    this.length++;
  }

  insertBefore(nodeData, data) {
    const node = this.find(nodeData);
    if (!node) return;

    const newNode = new LinkedListNode(data);

    newNode.next = node;
    if (this.head === node) {
      this.head = newNode;
    } else {
      node.back.next = newNode;
    }
    node.back = newNode;
    this.length++;
  }

  insertLast(data) {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.back = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deleteNode(data) {
    const node = this.find(data);
    if (!node) return;

    if (node === this.head && node === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (node === this.head) {
      this.head = this.head.next;
      this.head.back = null;
    } else if (node === this.tail) {
      this.tail = this.tail.back;
      this.tail.next = null;
    } else {
      node.back.next = node.next;
      node.next.back = node.back;
    }
    this.length--;
  }

  begin() {
    const itr = new LinkedListIterator(this.head);
    return itr;
  }

  printList() {
    let output = "";
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      output += itr.data() + " -> ";
      if (itr.current().next == null) {
        output += "null";
      }
    }
    console.log(output);
  }

  find(data) {
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      if (itr.data() == data) {
        return itr.current();
      }
    }
    return null;
  }
}

module.exports = {
  DoubleLinkedList: DoubleLinkedList,
  LinkedListNode: LinkedListNode,
  LinkedListIterator: LinkedListIterator,
};
