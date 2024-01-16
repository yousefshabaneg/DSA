import { SingleLinkedList } from "./singleLinkedList";
let singleList = new SingleLinkedList();
singleList.insertLast(1);
singleList.insertLast(2);
singleList.insertLast(3);
singleList.printList();

singleList.insertAfter(2, 98);
singleList.printList();

// singleList.deleteNode(singleList.find(2));
// singleList.printList();

// singleList.insertBefore(1, 76);
// singleList.printList();

// singleList.deleteNode(76);
// singleList.printList();
