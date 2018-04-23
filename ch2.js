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

let root = new LinkedList(1);
let n2 = new LinkedList(2);
root.next = n2;
let n3 = new LinkedList(3)
n2.next = n3;
let n4 = new LinkedList(4)
n3.next = n4;
let n5 = new LinkedList(5)
n4.next = n5;
let n6 = new LinkedList(6)
n5.next = n6;

console.log(kthToLast(root, 5));