function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

class DblLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(data) {
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
    this.length++;
  }
  remove(data) {
    let previous = this.head;
    let current = this.head;
    while(current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.length--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
  reverse() {
    let next = null;
    let previous = null;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      next = current.next;
      current.next = previous;
      current.prev = next;
      previous = current;
      current = next;
    }
  }
  traverse(fn) {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current.data);
      }
      current = current.next;
    }
  }
  print() {
    let o = [];
    let current = this.head;
    while (current) {
      o.push(current.data);
      current = current.next;
    }
    console.log(o.join(','));
  }
}

const ll = new DblLinkedList();
ll.add(0);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.print();
ll.reverse();
ll.print();
ll.add(2);
ll.add(2);
ll.add(2);
ll.remove(2);
ll.print();
ll.add(2);
ll.print();
ll.reverse();
ll.print();
ll.traverse(n => console.log(n*n));
ll.traverse(function find(n) {
  if (n === 1) {
    console.log('found 1')
    //throw new Error('find function goofed traversing the LL')
  }
})
