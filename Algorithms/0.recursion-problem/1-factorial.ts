// what is recursive function: Function that call itself with smaller input (sub-problem) till reaches the base case.
// Lets start with the most popular problem in Recursion.
// How to get Factorial using Recursion

function getFactorial(num: number): number {
  if (num === 1) return 1; // this is the base case of recursion.

  return num * getFactorial(num - 1);
}

console.log(getFactorial(5));
