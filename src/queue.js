const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

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
    self.tail = null;
    self.top = null;
  }
  
  getUnderlyingList() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    addNodeToEnd();
    function addNodeToEnd() {
      if (!self.tail && !self.top) {
        const newNode = new ListNode(value);
        self.top = newNode;
        self.tail = newNode;
      }
      else {
        self.tail.next = new ListNode(value);
        self.tail = self.tail.next;
      }
    }
  }

  dequeue() {
    if (!self.top) return;
    const lastElem = self.top;
    self.top = self.top.next;
    return lastElem;
  }
}

module.exports = {
  Queue
};
