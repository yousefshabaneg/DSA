// 2- power function : computer power of n
// note if p = 0 => result = 1

const getPower = (n: number, p = 2): number => {
  if (p === 0) return 1;

  return n * getPower(n, p - 1);
};

console.log("getPower", getPower(3, 3));

// 3- array maximum: input [1,8,2, 10, 3]= > 10

const arrayMax = (array: Array<number>, length: number): any => {
  if (length === 1) return array[0];
  const subResult = arrayMax(array, length - 1);
  return Math.max(subResult, array[length - 1]);
};

const a = [3, 2, 8, 1, 10];
console.log(arrayMax(a, a.length));

// 4- array sum: input [1,8,2, 10, 3]= > 24
// 0.5 + 4 + 1 + 5 + 1.5 = 12
const arraySum = (array: Array<number>, length: number): any => {
  if (length === 1) return array[0];
  const subResult = arraySum(array, length - 1);
  return subResult + array[length - 1];
};

console.log(arraySum(a, a.length));

// 5- array average: input [1,8,2, 10, 3]= > 4.8

const arrayAverage = (array: Array<number>, length: number): any => {
  if (length === 1) return array[0];
  let subResult = arrayAverage(array, length - 1);
  subResult *= length - 1;
  return (subResult + array[length - 1]) / length;
};

console.log(arrayAverage(a, a.length));

// 6- array increment: input [1,8,2, 10, 3]= > [1,9,4,13,7] --> increment arr[i] with i
const arrayIncrementByI = (array: Array<number>, length: number): any => {
  if (length === 0) return;
  arrayIncrementByI(array, length - 1);
  array[length - 1] += length - 1;
};

console.log(a);
