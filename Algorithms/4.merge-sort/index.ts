/*
todo: Pseudocode of Merge Sort 
    MERGE-SORT(A, p, r)
    1-  if p < r
    2-      q = (p + r)/2
    3-      MERGE-SORT(A, p, q)
    4-      MERGE-SORT(A, q + 1, r)
    5-      MERGE(A, p, q, r)
 */

function mergeSort(array: Array<number>, start: number, end: number) {
  if (start < end) {
    const midpoint = Math.floor((start + end) / 2);
    console.log({ midpoint, start, end, array });
    mergeSort(array, start, midpoint);
    mergeSort(array, midpoint + 1, end);
    merge(array, start, midpoint, end);
  }
}

export function merge(
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
  const leftArray: Array<number> = [];
  const rightArray: Array<number> = [];

  for (let a = 0; a < leftLength; a++) {
    leftArray[a] = array[start + a];
  }

  for (let b = 0; b < rightLength; b++) {
    rightArray[b] = array[midpoint + 1 + b];
  }

  while (i < leftLength && j < rightLength) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  console.log({ leftArray, rightArray });

  while (i < leftLength) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightLength) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

const array = [9, 5, 1, 4];
mergeSort(array, 0, array.length - 1);
console.log({ array });
