class LinkedListNode {
  data: any;
  next?: LinkedListNode | null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListIterator {
  currentNode: LinkedListNode;
  constructor(node: any) {
    this.currentNode = node;
  }

  data() {
    return this.currentNode.data;
  }

  next() {
    this.currentNode = this.currentNode.next!;
    return this;
  }

  current() {
    return this.currentNode;
  }
}

class SingleLinkedList {
  length: number;
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  unique?: boolean;
  constructor(unique?: boolean) {
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
      let data = itr.data()?.data ? itr.data().data : itr.data();
      output += data + " -> ";
      if (itr.current().next == null) {
        output += "null";
      }
    }
    console.log(output);
  }

  find(data: any) {
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      if (itr.data() == data) {
        return itr.current();
      }
    }
    return null;
  }

  isExist(data: any) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  canInsert(data: any) {
    return data && !(this.unique && this.isExist(data));
  }

  findParent(node: any) {
    for (let itr = this.begin(); itr.current() !== null; itr.next()) {
      if (itr.current().next === node) {
        return itr.current();
      }
    }
    return null;
  }

  insertLast(data: any) {
    if (!this.canInsert(data)) return;
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (!this.tail) return;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAfter(existingNodeData: any, data: any) {
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

  insertBefore(existingNodeData: any, data: any) {
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

  insertFirst(data: any) {
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
    this.head = this.head.next!;
    this.length--;
  }

  deleteNode(data: any) {
    const node = this.find(data);
    if (!node) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head === node) {
      this.head = node.next!;
    } else {
      const parent = this.findParent(node);
      if (this.tail === node) {
        this.tail = parent;
      } else {
        if (!parent) return;
        parent.next = node.next;
      }
    }

    this.length--;
  }
}

export { SingleLinkedList, LinkedListNode, LinkedListIterator };
