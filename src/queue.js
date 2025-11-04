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
    this.top = null;
    this.tail = null; 
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.top) {
      this.top = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  dequeue() {
    if (!this.top) {
        return;
    }

    const firstValue = this.top.value;
    this.top = this.top.next;

    if (!this.top) {
        this.tail = null;
    }

    return firstValue;
  }
}

module.exports = {
  Queue
};
