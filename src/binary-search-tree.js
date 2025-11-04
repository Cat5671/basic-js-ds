
const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require("../extensions/list-tree.js");
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return this.root;
  }
  add(data) {
    this.root = addNode(this.root);
    function addNode(node) {
      if (!node) return new Node(data);
      if (node.data > data) return addNode(node.left);
      else if (node.data < data) return addNode(node.right);
      else return node;
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return findNode(this.root);
    function findNode(node) {
      if (!node) return;
      if (node.data > data) findNode(node.left);
      else if (node.data < data) findNode(node.right);
      else return node;
    }
  }

  remove(data) {
    if (!this.has(data)) return null;
    let removeOk = "Remove -> ";
    this.base = removeNode(this.base, data);
    return removeOk;
    /*
                    4
                   / \
                  2   5
                 / \
                1   3
                
       Data remove: 3
       1. 3 > 4 - no
       2. 3 < 4 - yes
       3. 4.left = 2[1,3],
       4. 3 > 2 - yes
       5. 2.right = [3]
       6. 3 > 3 - no
       7. 3 < 3 - no
       8. 3 == 3 - yes
       9. !3.left && !3.right - yes -> remove Node
       Data remove: 2
       1. 2 > 4 - no
       2. 2 < 4 - yes
       3. 4.left = 2[1,3],
       4. 2 > 2 - no
       5. 2 < 2 - no
       6. 2 == 2 - yes
       7. !2.left && !2.right - no
       8. 2.left == true - yes
       9. 2.left = [1]
    */
    function removeNode(node, data) {
      if (!node) return null; //
      // if data > node.data, find right
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        // if data < node.data, find left
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          removeOk = removeOk + node.data;
          return null;
        } 
        if (!node.right) {
          removeOk = removeOk + node.data;
          node = node.left;
          return node;
        }
        if (!node.left) {
          removeOk = removeOk + node.data;
          node = node.right;
          return node;
        }
        let maxToleft = node.left;
        while (maxToleft.right) {
          maxToleft = maxToleft.right;
        }
        node.data = maxToleft.data;
        node.left = removeNode(node.left, maxToleft.data);
        return node;
      }
    }
  }
  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};