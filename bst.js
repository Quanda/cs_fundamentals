// Implement a Binary Search Tree
class BinarySearchTree {
    constructor(key=null, value=null) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // insert a node
    insert(key, value) {
        // if our tree is empty, this will be our root node
        // so set key and value
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        // otherwise if the new key is less than current node key
        // add the new node to left branch
        else if (key < this.key) {
            // if left pointer is null, create the new node there
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value);
            }
            // otherwise, call insert recursively so the node is added further down the tree
            else {
                this.left.insert(key, value);
            }
        }
        else {
            // if right pointer is null, create the new node there
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value);
            }
            // otherwise, call insert recursively so the node is added further down the tree
            else {
                this.right.insert(key, value);
            }
        }
    }
    // get a node
    get(key) {
        // BASE CASE: returns value when the requested key matches the current nodes key
        if (this.key == key) {
            return this.value;
        }
        // if the requested key is less than current node key
        // keep searching left branches
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        // if the requested key is greater than the current node key
        // keep searching right branches
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
}

// Write an algorithm to find the height of a binary search tree
const findHeight = (node) => {
    // if node is null, return -1
    if(node == null) return -1;
    // recursive calls to find height of left and right
    let leftHeight = findHeight(node.left)
    let rightHeight = findHeight(node.right)
    // return whichever side is greater + 1
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}


const BST = new BinarySearchTree();
BST.insert(12, 'right')
BST.insert(2, 'left')
BST.insert(5, 'five')
BST.insert(22, 'twentytwo')
BST.insert(18, 'eighteen')
BST.insert(232, 'twothirtytwo')
BST.insert(213, 'twothirteen')
console.log(BST)

const treeHeight = findHeight(BST);
console.log(`Our BST height is ${treeHeight}`)