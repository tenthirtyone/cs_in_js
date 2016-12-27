const someData = [9,2,5,4,1,7,6,8,4,1,2,5,9,2];

function quickSort(array) {
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
  return quickSort(less).concat(pivot, quickSort(more));
}

console.log(quickSort(someData));
