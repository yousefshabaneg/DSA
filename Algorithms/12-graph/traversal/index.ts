import DepthSearchGraph from "./Breadth-Graph";
import DijkstraGraph from "./Dikstra-Graph";

let g = new DepthSearchGraph(["A", "B", "C", "D", "E", "F", "G", "H", "I"]);
g.AddEdges(0, [1, 2]);
g.AddEdges(1, [0, 3, 4]);
g.AddEdges(2, [0, 3, 5]);
g.AddEdges(3, [1, 2, 4]);
g.AddEdges(4, [1, 5]);
g.AddEdges(5, [2, 3, 4, 7]);
g.AddEdges(6, [7, 8]);
g.AddEdges(7, [5, 6, 8]);
g.AddEdges(8, [6, 7]);

g.DFS();

let dijkstra = new DijkstraGraph([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
]);

dijkstra.AddEdges(0, [1, 2, 3], [2, 4, 3]);

dijkstra.AddEdges(1, [4, 5, 6], [7, 4, 6]);
dijkstra.AddEdges(2, [4, 5, 6], [3, 2, 4]);
dijkstra.AddEdges(3, [4, 5, 6], [4, 1, 5]);

dijkstra.AddEdges(4, [7, 8], [1, 4]);
dijkstra.AddEdges(5, [7, 8], [6, 3]);
dijkstra.AddEdges(6, [7, 8], [3, 3]);

dijkstra.AddEdges(7, [9], [3]);
dijkstra.AddEdges(8, [9], [4]);

dijkstra.Dijkstra();
