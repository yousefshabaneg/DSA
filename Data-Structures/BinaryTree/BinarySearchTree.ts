import Queue from "../Queue/Queue";

class TreeNode<T> {
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  constructor(public data: T) {}
}

class NodeWithParent<T> {
  node?: TreeNode<T>;
  parent?: TreeNode<T>;
  isLeft?: boolean;
}

class BinarySearchTree<T> {
  private root?: TreeNode<T>;

  insert(data: T) {
    const newNode = new TreeNode<T>(data);
    if (!this.root) {
      return (this.root = newNode);
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data > data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  findNodeAndParent(data: T) {
    let parent;
    let nodeAndParent;
    let isLeft = false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        nodeAndParent = new NodeWithParent<T>();
        nodeAndParent.node = currentNode;
        nodeAndParent.parent = parent;
        nodeAndParent.isLeft = isLeft;
        break;
      }
      if (currentNode.data > data) {
        parent = currentNode;
        isLeft = true;
        currentNode = currentNode.left;
      } else {
        parent = currentNode;
        isLeft = false;
        currentNode = currentNode.right;
      }
    }
    return nodeAndParent;
  }

  find(data: T) {
    let node = this.root;
    while (node) {
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  delete(data: T) {
    let nodeAndParent = this.findNodeAndParent(data);
    if (!nodeAndParent || !nodeAndParent.node) return;

    if (nodeAndParent.node?.left && nodeAndParent?.node.right) {
      this.deleteNodeHasTwoChild(nodeAndParent.node!);
    } else if (!nodeAndParent.node.left !== !nodeAndParent.node.right) {
      this.deleteNodeHasOneChild(nodeAndParent.node!);
    } else if (!nodeAndParent.node.left && !nodeAndParent.node.right) {
      this.deleteLeafNode(nodeAndParent);
    }
  }

  deleteLeafNode(nodeAndParent: NodeWithParent<T>) {
    if (nodeAndParent.parent) {
      if (nodeAndParent.isLeft) {
        nodeAndParent.parent.left = undefined;
      } else {
        nodeAndParent.parent.right = undefined;
      }
    } else {
      this.root = undefined;
    }
  }

  deleteNodeHasTwoChild(nodeToDelete: TreeNode<T>) {
    let currentNode = nodeToDelete.right;
    let parentOfSmallestNode;

    while (currentNode?.left) {
      parentOfSmallestNode = currentNode;
      currentNode = currentNode.left;
    }

    if (parentOfSmallestNode) {
      parentOfSmallestNode.left = currentNode?.right;
    } else {
      nodeToDelete.right = currentNode?.right;
    }

    nodeToDelete.data = currentNode?.data!;
  }

  deleteNodeHasOneChild(nodeToDelete: TreeNode<T>) {
    let nodeToReplace = nodeToDelete.right || nodeToDelete.left;
    nodeToDelete.data = nodeToReplace?.data!;
    nodeToDelete.left = nodeToReplace?.left;
    nodeToDelete.right = nodeToReplace?.right;
  }

  balance() {
    let nodes: Array<T> = [];
    this.inOrderArray(this.root, nodes);
    this.root = this.recursiveBalance(0, nodes.length - 1, nodes);
  }

  inOrderArray(node: TreeNode<T> | undefined, nodes: Array<T>) {
    if (!node) return;

    this.inOrderArray(node.left!, nodes);
    nodes.push(node.data);
    this.inOrderArray(node.right!, nodes);
  }

  recursiveBalance(start: number, end: number, nodes: Array<T>) {
    if (start > end) return;

    const mid = ((start + end) / 2) | 0;
    const newNode = new TreeNode<T>(nodes[mid]);

    newNode.left = this.recursiveBalance(start, mid - 1, nodes);
    newNode.right = this.recursiveBalance(mid + 1, end, nodes);
    return newNode;
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

  heightFromNode(node?: TreeNode<T>): number {
    if (!node) return 0;
    return (
      1 +
      Math.max(this.heightFromNode(node.left), this.heightFromNode(node.right))
    );
  }

  getTreeHeight() {
    return this.heightFromNode(this.root);
  }

  preOrder() {
    this.preOrderTraversal(this.root);
  }

  preOrderTraversal(node?: TreeNode<T>) {
    if (!node) return;
    console.log(node.data + " -> ");
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  postOrderTraversal(node?: TreeNode<T>) {
    if (!node) return;
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node?: TreeNode<T>) {
    if (!node) return;
    this.preOrderTraversal(node.left);
    console.log(node.data + " -> ");
    this.preOrderTraversal(node.right);
  }
}

export default BinarySearchTree;
