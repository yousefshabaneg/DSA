import BinaryTree from "./BinaryTree";
import BinarySearchTree from "./BinarySearchTree";
// const tree = new BinaryTree();
const tree = new BinarySearchTree();
tree.insert(6);
tree.insert(4);
tree.insert(8);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(9);
// tree.insert(1);
tree.insert(3);
tree.print();

console.log({ height: tree.getTreeHeight() });

tree.delete(3);
tree.print();

const balanceTree = new BinarySearchTree();
balanceTree.insert(1);
balanceTree.insert(2);
balanceTree.insert(3);
balanceTree.insert(4);
balanceTree.insert(5);
balanceTree.insert(6);
balanceTree.insert(7);

console.log({ heightBefore: balanceTree.getTreeHeight() }); // 7, before balancing
balanceTree.print();

balanceTree.balance();
console.log({ heightAfter: balanceTree.getTreeHeight() }); // 3, after balancing
balanceTree.print();

/**
                     1
            2                   3
            
        4       6           8       5
 */
