function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.height = 0;
  }
  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.head.next = node;
      this.tail = node;
      this.tail.prev = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.height++;
  }
  pop() {
    if (this.tail) {
      const temp = this.tail.data;
      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
        return temp;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        return temp;
      }
    }
  }
  peek() {
    if (this.tail) {
      return this.tail.data;
    }
  }
}

const s = new Stack();
s.push(0);
s.push(1);
s.push(2);
s.push(3);
console.log(s.height);
console.log(s.pop());
console.log(s.pop());
console.log(s.peek());
