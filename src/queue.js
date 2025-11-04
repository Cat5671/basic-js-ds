const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    self.top = null;
  }
  
  getUnderlyingList() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    function addNodeToEnd(node) {
      if (!node.next) {
        node.next = new ListNode(value);
        return node.next;
      } else return addNodeToEnd(node.next);
    }
    if (!this.top) {
      this.top = new ListNode(value);
    }
    else {
      this.top.next = addNodeToEnd(this.top);
    }
  }
  
  dequeue() {
    if (!this.top) return;
    const firstValue = this.top.value;
    this.top = this.top.next;
    return firstValue;
  }
}

module.exports = {
  Queue
};
