class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeDupes = (node) => {
  let obj = {};
  let prev;
  while (node) {
    if (obj[node.val]) {
      prev.next = node.next;
    } else {
      obj[node.val] = true;
      prev = node;
    }
    node = node.next;
  }
};
// O (N) time with extra space for object map

const kthToLast = (node, k) => {
  let pointer = node;
  let n = k;
  while (n > 0) {
    pointer = pointer.next;
    n--;
  }
  while (pointer) {
    node = node.next;
    pointer = pointer.next;
  }
  return node;
};
// O (N) time with no extra space

const removeGivenNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
// O(1) time with no extra space

const partition = (node, val) => {
  let head = node;
  let tail = node;
  while (node) {
    let next = node.next;
    if (node.val < val) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next= null;
  return head;
};
// O (N) time with no extra space

let root = new LinkedList(10);
let n2 = new LinkedList(2);
root.next = n2;
let n3 = new LinkedList(3)
n2.next = n3;
let n4 = new LinkedList(41)
n3.next = n4;
let n5 = new LinkedList(5)
n4.next = n5;
let n6 = new LinkedList(4)
n5.next = n6;

console.log(partition(root, 5));