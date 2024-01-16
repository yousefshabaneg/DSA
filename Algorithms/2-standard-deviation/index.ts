function calculateStandardDeviation() {
  let sd = 0,
    ave = 0,
    n = 0,
    a = 0,
    b = 0;
  const x: Array<number> = [];
  n = Number(prompt("Enter the number of elements: ")) ?? 0;

  if (!n) return;

  for (let i = 0; i < n; i++) {
    x[i] = Number(prompt(`Enter the ${i + 1} element:  `));
    ave += x[i];
  }

  ave = ave / n;

  for (let i = 0; i < n; i++) {
    a += Math.pow(x[i] - ave, 2);
  }

  b = a / n;

  sd = Math.sqrt(b);
  return sd;
}

const sd = calculateStandardDeviation();
const resultEL = document.getElementById("result") as HTMLElement;
resultEL.innerText = `The Standard Deviation of The given elements is: ${sd}`;
