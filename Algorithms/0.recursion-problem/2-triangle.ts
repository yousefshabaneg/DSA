/* 
1 - print triangle using recursion DESC
    *****
    ****
    ***
    **
    *

2 - print triangle using recursion ASC
    *
    **
    ***
    ****
    *****

    */

function printTriangleDESC(levels: number) {
  if (levels === 0) return; //base case.

  let output = "";
  for (let i = 0; i < levels; i++) {
    output += "*";
  }

  console.log(output);

  return printTriangleDESC(levels - 1);
}

function printTriangleASC(levels: number) {
  //5 4 3 2 1 0
  if (levels === 0) return; //base case.
  printTriangleASC(levels - 1);

  let output = "";
  for (let i = 0; i < levels; i++) {
    output += "*";
  }

  console.log(output);
}

printTriangleDESC(5);
printTriangleASC(5);
