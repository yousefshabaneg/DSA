import Queue from "../../../Data-Structures/Queue/Queue";
import Graph, { Edge, Vertex } from "./Graph";

class BreadthSearchGraph extends Graph {
  BFS(): void {
    console.log("BFS From Graph Class;");
    let q = new Queue();
    q.enqueue(this.Vertices[0]);
    this.Vertices[0].Visited = true;

    let current_vertex: Vertex;
    let destinations: Edge[];
    while (!q.isEmpty()) {
      current_vertex = q.dequeue();
      destinations = current_vertex.VertexLinks;
      for (let i = 0; i < destinations.length; i++) {
        if (!destinations[i].Target.Visited) {
          q.enqueue(destinations[i].Target);
          destinations[i].Target.Visited = true;
          console.log(
            current_vertex.Name + " - " + destinations[i].Target.Name
          );
        }
      }
    }
    this.resetVerticesStatus();
  }
}

export default BreadthSearchGraph;
