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

const sumLinkedList = (node1, node2) => {
  if (!node1 && !node2) return null;
  if (!node1) return node2;
  if (!node2) return node1;
  let result, current;
  let carry = 0;
  while (node1 || node2) {
    let val1 = node1 ? node1.val : 0;
    let val2 = node2 ? node2.val : 0;
    let sum = val1 + val2 + carry;
    carry = 0;
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    }
    let newNode = new LinkedList(sum);
    current ? current.next = newNode : result = newNode;
    current = newNode;
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  if (carry) {
    current.next = new LinkedList(carry);
  }
  return result;
};

module.exports = {
  sumLinkedList,
}