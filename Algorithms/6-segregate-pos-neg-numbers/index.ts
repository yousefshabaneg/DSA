// Segregate positive and negative numbers
//For example,
// Input: [9, -3, 5, -2, -8, -6, 1, 3]
// Output: [-3, -2, -8, -6, 9, 5, 1, 3]

// using merge sort technique

function segregate(array: Array<number>, start: number, end: number) {
  if (start < end) {
    const midpoint = Math.floor((start + end) / 2);
    segregate(array, start, midpoint); //[9, -3, 5, -2]
    segregate(array, midpoint + 1, end); // [-8, -6, 1, 3]
    merge(array, start, midpoint, end);
  }
}

function merge(
  array: Array<number>,
  start: number,
  midpoint: number,
  end: number
) {
  let i = 0,
    j = 0,
    k = start;
  const leftLength = midpoint - start + 1;
  const rightLength = end - midpoint;
  const leftArray = [];
  const rightArray = [];
  for (let a = 0; a < leftLength; a++) {
    leftArray[a] = array[start + a];
  }

  for (let b = 0; b < rightLength; b++) {
    rightArray[b] = array[midpoint + 1 + b];
  }

  while (i < leftLength && leftArray[i] <= 0) {
    array[k++] = leftArray[i++];
  }
  while (j < rightLength && rightArray[j] <= 0) {
    array[k++] = rightArray[j++];
  }

  while (i < leftLength) {
    array[k++] = leftArray[i++];
  }

  while (j < rightLength) {
    array[j++] = rightArray[j++];
  }
}

const defaultSegregatePosNegNumbers = (array: Array<number>): Array<number> => {
  const arrPos = [];
  const arrNeg = [];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current > 0) {
      arrPos.push(array[i]);
    } else {
      arrNeg.push(array[i]);
    }
  }

  return [...arrNeg, ...arrPos];
};

const segArr = [9, -3, 5, -2, -8, -6, 1, 3];
// console.log(defaultSegregatePosNegNumbers(segArr));
segregate(segArr, 0, 7);
console.log(segArr);
