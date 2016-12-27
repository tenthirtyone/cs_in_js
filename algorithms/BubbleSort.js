const someData = [9,2,5,4,1,7,6,8,4,1,2,5,9,2];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j-1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}

console.log(bubbleSort(someData));
