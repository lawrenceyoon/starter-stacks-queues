// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // Creates a new node,
    // add data to the new node, and have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }
}

const newStack = new Stack();

console.log(newStack.push(2));
