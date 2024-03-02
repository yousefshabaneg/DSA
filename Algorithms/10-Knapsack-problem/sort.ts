import { Item } from ".";

export function mergeSort(array: Array<Item>, start: number, end: number) {
  if (start < end) {
    const midpoint = Math.floor((start + end) / 2);
    mergeSort(array, start, midpoint);
    mergeSort(array, midpoint + 1, end);
    merge(array, start, midpoint, end);
  }
}

export function merge(
  array: Array<Item>,
  start: number,
  midpoint: number,
  end: number
) {
  let i = 0,
    j = 0,
    k = start;
  const leftLength = midpoint - start + 1;
  const rightLength = end - midpoint;
  const leftArray: Array<Item> = [];
  const rightArray: Array<Item> = [];

  for (let a = 0; a < leftLength; a++) {
    leftArray[a] = array[start + a];
  }

  for (let b = 0; b < rightLength; b++) {
    rightArray[b] = array[midpoint + 1 + b];
  }

  while (i < leftLength && j < rightLength) {
    if (leftArray[i].ratio <= rightArray[j].ratio) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

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
