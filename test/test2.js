const { sumLinkedList } = require('../ch2.js');

const test = (actual, expected, testDesc) => {
  console.log('testing ' + testDesc);
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('passed!');
  } else {
    console.log(`expected ${JSON.stringify(expected)} but received ${JSON.stringify(actual)}`)
  }
};

class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumLinkedListTest = () => {
  
  let node1 = new LinkedList(4);
  let n2 = new LinkedList(5);
  node1.next = n2;
  let n3 = new LinkedList(7)
  n2.next = n3;
  
  let node2 = new LinkedList(5);
  let t2 = new LinkedList(9);
  node2.next = t2;
  
  let ans = new LinkedList(9);
  let a2 = new LinkedList(4);
  ans.next = a2;
  let a3 = new LinkedList(8);
  a2.next = a3;

  test(sumLinkedList(node1, node2), ans, 'Testing unequal nodes sum');
};

sumLinkedListTest();
console.log(754+95);