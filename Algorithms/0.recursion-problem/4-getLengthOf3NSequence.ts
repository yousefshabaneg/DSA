/* get Length of 3n+1 sequence
start from n
if n is even => next number is n / 2;
if n is odd => next number is 3n + 1;
if n === 1 => End of Sequence;

ex: start from 5 ==> 5 16 8 4 2 1 => length = 6
*/

// 5 ->
function getLengthOf3NSequence(n: number): any {
  if (n === 1) return 1;
  const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
  return 1 + getLengthOf3NSequence(next);
}

console.log(getLengthOf3NSequence(5));
