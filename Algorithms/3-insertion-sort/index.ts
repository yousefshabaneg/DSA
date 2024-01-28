/*
todo: Pseudocode of Insertion Sort 
    1- x =[], key = 0
    2- read x
    3- for i =1 forward i < x.length
    3.1- key = x[i]
    3.2- for j = i-1 backward j >= 0
    3.2.1- if key < x[j] then x[j+1] = x[j]
    3.2.2- else break this loop
    3.3- x[j+1] = key
    4- print x  
 */

function insertionSort(arr: Array<number>) {
  const x = [...arr];

  for (let i = 1; i < x.length; i++) {
    let key = x[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (key < x[j]) {
        x[j + 1] = x[j];
      } else {
        break;
      }
    }
    x[j + 1] = key;
  }

  return x;
}

const arr = [5, 9, 1, 4];
const arrSorted = insertionSort(arr);

console.log({ arr, arrSorted });
