class ArrayList {
  constructor() {
    this.array = [];
  }
  add(data) {
    this.array.push(data);
  }
  remove(data) {
    this.array = this.array.filter(n => n!==data);
  }
  removeAt(index) {
    return this.array.splice(index, 1);
  }
  sort() {
    this.array = this.quickSort(this.array);
  }
  quickSort(array) {
    if (!array) {
      array = this.array;
    }
    if (array.length < 2) {
      return array;
    }

    const pivot = array[0];
    const less = [];
    const more = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        less.push(array[i]);
      } else {
        more.push(array[i]);
      }
    }
    return this.quickSort(less).concat(pivot, this.quickSort(more));
  }
  reverse() {
    let start = 0;
    let end = this.array.length-1;
    while (start < end) {
      let temp = this.array[start];
      this.array[start] = this.array[end];
      this.array[end] = temp;
      start++;
      end--;
    }
  }
  print() {
    console.log(this.array.join(','))
  }
}

const al = new ArrayList();
al.add(0);
al.add(1);
al.add(2);
al.add(3);
al.add(4);
al.print();
al.reverse();
al.print();
al.add(2)
al.add(2)
al.add(2)
al.print()
al.remove(2)
al.print()
al.add(2)
al.sort()
al.print()
