let str = "HELLOWORLD";
let sub = "OHELOD";
const strLength = str.length;
const subLength = sub.length;

str = " " + str;
sub = " " + sub;

const dp: any = [];

for (let i = 0; i <= subLength; i++) {
  dp[i] = [];
  for (let j = 0; j <= strLength; j++) {
    if (i === 0 || j === 0) {
      dp[i][j] = 0;
    } else if (sub[i] === str[j]) {
      dp[i][j] = 1 + dp[i - 1][j - 1];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

let solution = "";
let row = subLength;
let col = strLength;

while (row > 0 && col > 0) {
  if (dp[row][col] > dp[row][col - 1]) {
    if (dp[row][col] === dp[row - 1][col]) {
      row--;
    } else {
      solution = sub[row] + solution;
      row--;
      col--;
    }
  } else col--;
}

console.log(dp[subLength][strLength]);
console.log("Solution: ", solution);
