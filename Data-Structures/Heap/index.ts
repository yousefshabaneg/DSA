import Heap from "./Heap";

const heap = new Heap();
heap.insert(5);
heap.insert(15);
heap.insert(3);
heap.insert(20);
heap.insert(25);
heap.insert(1);
heap.insert(89);
heap.insert(32);
heap.insert(18);

heap.draw();
heap.pop();
heap.draw();
