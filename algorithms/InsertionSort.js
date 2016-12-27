const someData = [9,2,5,4,1,7,6,8,4,1,2,5,9,2];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = temp;
  }
  return array;
}

console.log(insertionSort(someData));
