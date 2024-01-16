"use strict";
function calculateCorrelation() {
    var _a;
    let sumX = 0, sumY = 0, sumXY = 0, sumXPow = 0, sumYPow = 0, a = 0, b = 0, c = 0, d = 0, n = 0, corr = 0;
    const x = [];
    const y = [];
    n = (_a = Number(prompt("Enter the number of elements: "))) !== null && _a !== void 0 ? _a : 0;
    if (!n)
        return;
    for (let i = 0; i < n; i++) {
        x[i] = Number(prompt(`Enter the X${i + 1} element:  `));
        y[i] = Number(prompt(`Enter the Y${i + 1} element:  `));
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumXPow += x[i] * x[i];
        sumYPow += y[i] * y[i];
    }
    a = n * sumXY;
    b = sumX * sumY;
    c = n * sumXPow - Math.pow(sumX, 2);
    d = n * sumYPow - Math.pow(sumY, 2);
    corr = (a - b) / (Math.sqrt(c) * Math.sqrt(d));
    return corr;
}
const corr = calculateCorrelation();
const resultCorrEL = document.getElementById("result");
resultCorrEL.innerText = `The Correlation of The given elements is: ${corr}`;
