const someData = [9,2,5,4,1,7,6,8,4,1,2,5,9,2];

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = array.length / 2;
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const o = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      o.push(left.shift());
    } else {
      o.push(right.shift());
    }
  }
  return o.concat(left.slice()).concat(right.slice());
}

console.log(mergeSort(someData));
