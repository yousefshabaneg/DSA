(() => {
  const items = [
    { name: "#1", weight: 1, profit: 4 },
    { name: "#2", weight: 3, profit: 9 },
    { name: "#3", weight: 5, profit: 12 },
    { name: "#4", weight: 4, profit: 11 },
  ];

  const max_weight = 8;

  const table: any = [];

  items.splice(0, 0, { name: "#0", weight: 0, profit: 0 });

  for (let i = 0; i < items.length; i++) {
    table[i] = [];
    for (let j = 0; j <= max_weight; j++) {
      if (i == 0 || j == 0) {
        table[i][j] = 0;
        continue;
      }
      const itemWeight = items[i].weight;
      const topCellValue = table[i - 1][j];
      if (j >= itemWeight) {
        {
          const diff = table[i - 1][j - items[i].weight];
          const newProfit = items[i].profit + diff;
          table[i][j] = Math.max(topCellValue, newProfit);
        }
      } else table[i][j] = topCellValue;
    }
  }

  console.log(table);

  // Algorithm for getting the max profit (solution)

  /* 
      1- start from bottom right
      2- remain = maxWeight
      3- while (remail > 0){
          if(value > top_value){
              remail = remail - item_weight;
              go to column[remain] and go to the top row;
          }
          else move to top row;
      }
      */

  let remain = max_weight;
  let row = items.length - 1;
  let col = max_weight;
  const solution: any = [];

  while (remain > 0 && col > 0) {
    if (table[row][col] > table[row - 1][col]) {
      solution.push(items[row].name);
      remain -= items[row].weight;
      col = remain;
    }
    row--;
  }
  console.log(solution);
})();
