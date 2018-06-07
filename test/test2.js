const { sumLinkedList } = require('../ch2.js');

const test = (actual, expected, testDesc) => {
  console.log(testDesc);
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
  
  const equalTest = () => {
    let node1 = new LinkedList(4);
    let n2 = new LinkedList(5);
    node1.next = n2;
    let n3 = new LinkedList(1)
    n2.next = n3;
    
    let node2 = new LinkedList(5);
    let t2 = new LinkedList(9);
    node2.next = t2;
    let t3 = new LinkedList(7)
    t2.next = t3;
    
    let ans = new LinkedList(9);
    let a2 = new LinkedList(4);
    ans.next = a2;
    let a3 = new LinkedList(9);
    a2.next = a3;
  
    test(sumLinkedList(node1, node2), ans, 'Testing equal nodes sum');
  };
  const unequalTest = () => {
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
  equalTest();
  unequalTest();
};

sumLinkedListTest();