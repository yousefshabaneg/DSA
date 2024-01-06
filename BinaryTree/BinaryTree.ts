import Queue from "../Queue/Queue";

class TreeNode<T> {
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  constructor(public data: T) {}
}
class BinaryTree<T> {
  private root?: TreeNode<T>;

  insert(data: T) {
    const newNode = new TreeNode<T>(data);
    if (!this.root) {
      return (this.root = newNode);
    }
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        queue.enqueue(currentNode.left);
      }
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        queue.enqueue(currentNode.right);
      }
    }
  }
  print() {
    if (!this.root) {
      console.log("Tree is Empty");
      return;
    }
    let queue = new Queue();
    queue.enqueue(this.root);
    let output = "";
    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();
      output += currentNode.data + " --> ";
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
      queue.print();
    }
    console.log(output);
  }
}

export default BinaryTree;
