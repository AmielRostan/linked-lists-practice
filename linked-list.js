class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new LinkedListNode(val);

    if(this.length > 0) {
      node.next = this.head;
    }

    this.head = node;
    this.length++;
  }

  addToTail(val) {
    let current = this.head;
    let node = new LinkedListNode(val);

    if(current != null) {
      while(current != null) {
        if(current.next === null) {
          current.next = node;
          break;
        }
        current = current.next;
      }
    } else {
      this.head = node;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
