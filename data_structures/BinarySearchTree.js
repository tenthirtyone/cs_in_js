function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data, node) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      if (!node) {
        node = this.root;
      }
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.add(data, node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.add(data, node.right);
        }
      }
    }
  }
  print() {
    console.log(this.root);
  }
  preOrder(node) {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  postOrder(node) {
    if (!node) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
  inOrder(node) {
    if (!node) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  bfs(fn) {
    const q = [];
    q.push(this.root);
    while (q.length) {
      const temp = q.shift();
      if (temp.left) {
        q.push(temp.left);
      }
      if (temp.right) {
        q.push(temp.right);
      }
      if (fn) {
        fn(temp);
      }
    }
  }
}

const bst = new BST();
bst.add(5);
bst.add(2);
bst.add(7);
bst.add(1);
bst.add(3);
bst.add(8);
bst.add(6);

//bst.bfs(n => console.log(n));
bst.inOrder(bst.root);
bst.remove(8, bst.root);
console.log('');
bst.inOrder(bst.root);
