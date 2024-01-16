const { DoubleLinkedList } = require("./doublyLinkedList");

let list = new DoubleLinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.printList();
console.log({ head: list.head.data, tail: list.tail.data });

list.insertAfter(3, 98);
list.printList();
console.log({ head: list.head.data, tail: list.tail.data });

list.deleteNode(2);
list.printList();

list.insertBefore(98, 76);
list.printList();

console.log({ length: list.length });
list.deleteNode(1);
list.printList();
