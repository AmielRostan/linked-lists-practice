const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

console.log(`Elapsed time to add 1000 nodes in the lists:`);
const linkedList = new LinkedList();
console.time('linkedListBenchmark');
for(let i = 0; i < 10000; i++) {
    linkedList.addToHead(i);
}
console.log('linked list:');
console.timeEnd('linkedListBenchmark');

const doublyLinkedList = new DoublyLinkedList();
console.time('doublyLinkedListBenchmark');
for(let i = 0; i < 10000; i++) {
    doublyLinkedList.addToHead(i);
}
console.log('doubly linked list:');
console.timeEnd('doublyLinkedListBenchmark');
