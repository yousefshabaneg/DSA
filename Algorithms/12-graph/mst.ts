// Minimum Spanning Tree.

function mst() {
  const labels: string[] = ["1", "2", "3", "4", "5", "6"];
  const graph: number[][] = [
    [0, 6.7, 5.2, 2.8, 5.6, 3.6],
    [6.7, 0, 5.7, 7.3, 5.1, 3.2],
    [5.2, 5.7, 0, 3.4, 8.5, 4.0],
    [2.8, 7.3, 3.4, 0, 8, 4.4],
    [5.6, 5.1, 8.5, 8, 0, 4.6],
    [3.6, 3.2, 4, 4.4, 4.6, 0],
  ];

  const v: number = 6;

  let selectedEdgesCount: number = 0;
  const selected: boolean[] = new Array(v).fill(false);
  selected[0] = true;

  while (selectedEdgesCount < v - 1) {
    let min = Number.MAX_SAFE_INTEGER;
    let tempFrom: number = -1;
    let tempTo: number = -1;

    for (let i = 0; i < v; i++) {
      if (selected[i] === true) {
        for (let j = 0; j < v; j++) {
          if (selected[j] == false && graph[i][j] > 0 && graph[i][j] < min) {
            min = graph[i][j];
            tempFrom = i;
            tempTo = j;
          }
        }
      }
    }

    selected[tempTo] = true;
    selectedEdgesCount++;

    console.log(
      `${labels[tempFrom]} - ${labels[tempTo]} : ${graph[tempFrom][tempTo]}`
    );
  }
}

mst();
