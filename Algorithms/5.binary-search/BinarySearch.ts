function BinarySearch<T>(key: T, arr: Array<T>) {
  let low = 0;
  let high = arr.length - 1;
  const getMid = () => Math.floor((high + low) / 2);
  let mid = getMid();

  if (arr[mid] === key) return mid;

  while (low <= high) {
    mid = getMid();
    console.log({ mid });
    if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    if (arr[mid] === key) return mid;
  }

  return null;
}

const index = BinarySearch(2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

console.log({ index });
