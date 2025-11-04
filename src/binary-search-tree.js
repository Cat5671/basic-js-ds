
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
    this.root = removeNode(this.root, data);
    return removeOk;
    
    function removeNode(node, data) {
      if (!node) return null; //
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
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
