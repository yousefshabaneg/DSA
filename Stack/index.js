const { ArrayStack: Stack } = require("./Stack");

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

const head = stack.peek();
console.log(head);

stack.pop();

console.log(stack.isEmpty());

stack.print();
