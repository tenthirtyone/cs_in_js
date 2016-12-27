function Node(data) {
  this.data = data;
  this.next = null;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  remove() {
    if (this.head) {
      const temp = this.head.data;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }
  print() {
    const o = [];
    let current = this.head;
    while (current) {
      o.push(current.data);
      current = current.next;
    }
    console.log(o.join(','));
  }
}

const q = new Queue();
q.add(0);
q.add(1);
q.add(2);
q.add(3);
q.print();
console.log(q.remove());
console.log(q.remove());
console.log(q.length);
