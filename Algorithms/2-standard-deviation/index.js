"use strict";
function calculateStandardDeviation() {
    var _a;
    let sd = 0, ave = 0, n = 0, a = 0, b = 0;
    const x = [];
    n = (_a = Number(prompt("Enter the number of elements: "))) !== null && _a !== void 0 ? _a : 0;
    if (!n)
        return;
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
const resultEL = document.getElementById("result");
resultEL.innerText = `The Standard Deviation of The given elements is: ${sd}`;
