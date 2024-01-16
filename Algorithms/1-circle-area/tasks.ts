// parallelogram area is -> 1/2 * (d1 * d2)
function getParallelogramAreaUsingDiameters(d1: number, d2: number): number {
  return 0.5 * d1 * d2;
}

// parallelogram area is -> base * height
function getParallelogramAreaUsingBaseHeight(
  base: number,
  height: number
): number {
  return base * height;
}

// Trapezoid area is -> height * ((base1 + base2) / 2)
function getTrapezoidArea(
  base1: number,
  base2: number,
  height: number
): number {
  return height * ((base1 + base2) / 2);
}

console.log(getParallelogramAreaUsingDiameters(10, 5));
console.log(getParallelogramAreaUsingBaseHeight(10, 5));
console.log(getTrapezoidArea(5, 10, 15));
