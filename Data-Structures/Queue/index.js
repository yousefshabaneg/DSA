const Queue = require("./Queue");

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();
queue.dequeue();
queue.print();

const head = queue.peek();
console.log({ head });
