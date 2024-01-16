const {
  SingleLinkedList,
  LinkedListNode,
} = require("../LinkedList/single/singleLinkedList");
class LinkedListStack {
  #dataList;
  constructor(unique) {
    this.#dataList = new SingleLinkedList(unique);
  }

  push(_data) {
    this.#dataList.insertFirst(_data);
  }

  pop() {
    const headData = this.#dataList.head.data;
    this.#dataList.deleteHead();
    return headData;
  }

  peek() {
    return this.#dataList.head.data;
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

class ArrayStack {
  #dataList;
  #topIndex;
  constructor() {
    this.#dataList = [];
    this.#topIndex = -1;
  }

  push(_data) {
    this.#dataList.push(_data);
    this.#topIndex++;
  }

  pop() {
    if (this.#topIndex < 0) return;
    const [headData] = this.#dataList.splice(this.#topIndex, 1);
    this.#topIndex--;
    return headData;
  }

  peek() {
    return this.#dataList[this.#topIndex];
  }

  isEmpty() {
    return this.#dataList.length <= 0;
  }

  print() {
    let output = "";
    for (let i = this.#topIndex; i >= 0; i--) {
      output += this.#dataList[i] + " --> ";
    }
    console.log(output);
  }

  size() {
    return this.#dataList.length;
  }
}

module.exports = {
  LinkedListStack,
  ArrayStack,
};
