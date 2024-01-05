const {
  SingleLinkedList,
  LinkedListNode,
} = require("../LinkedList/single/singleLinkedList");

class Queue {
  #dataList;
  constructor(unique) {
    this.#dataList = new SingleLinkedList(unique);
  }

  enqueue(_data) {
    this.#dataList.insertLast(_data);
  }

  dequeue() {
    if (!this.#dataList.head?.data) return;
    const headData = this.#dataList.head.data;
    this.#dataList.deleteHead();
    return headData;
  }

  peek() {
    return this.#dataList.head?.data ?? null;
  }

  isEmpty() {
    return this.#dataList.length <= 0;
  }

  print() {
    this.#dataList.printList();
  }

  size() {
    return this.#dataList.length;
  }
}

module.exports = Queue;
