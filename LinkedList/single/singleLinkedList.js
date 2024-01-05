class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
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

class SingleLinkedList {
  constructor(unique) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.unique = unique ?? false;
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

  isExist(data) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  canInsert(data) {
    return data && !(this.unique && this.isExist(data));
  }

  findParent(node) {
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      if (itr.current().next === node) {
        return itr.current();
      }
    }
    return null;
  }

  insertLast(data) {
    if (!this.canInsert(data)) return;
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAfter(existingNodeData, data) {
    const node = this.find(existingNodeData);
    if (!node) return;

    const newNode = new LinkedListNode(data);
    newNode.next = node.next;
    node.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.length++;
  }

  insertBefore(existingNodeData, data) {
    const node = this.find(existingNodeData);
    if (!node) return;

    const newNode = new LinkedListNode(data);
    newNode.next = node;

    const parent = this.findParent(node);
    if (parent === null) {
      this.head = newNode;
    } else {
      parent.next = newNode;
    }

    this.length++;
  }

  insertFirst(data) {
    if (!this.canInsert(data)) return;
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  deleteHead() {
    if (this.head === null) return;
    this.head = this.head.next;
    this.length--;
  }

  deleteNode(data) {
    const node = this.find(data);
    if (!node) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = node.next;
    } else {
      const parent = this.findParent(node);
      if (this.tail === node) {
        this.tail = parent;
      } else {
        parent.next = node.next;
      }
    }

    this.length--;
  }
}

module.exports = {
  SingleLinkedList: SingleLinkedList,
  LinkedListNode: LinkedListNode,
  LinkedListIterator: LinkedListIterator,
};
