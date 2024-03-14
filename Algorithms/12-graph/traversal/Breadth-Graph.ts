import Graph, { Edge, Vertex } from "./Graph";

class DepthSearchGraph extends Graph {
  DFS(): void {
    console.log("DFS From Graph Class;");
    this.#DFSRecursion(this.Vertices[0]);
    this.resetVerticesStatus();
  }

  #DFSRecursion(current_vertex: Vertex): void {
    current_vertex.Visited = true;
    let destinations: Edge[] = current_vertex.VertexLinks;
    for (let i = 0; i < destinations.length; i++) {
      if (!destinations[i].Target.Visited) {
        console.log(current_vertex.Name + " - " + destinations[i].Target.Name);
        this.#DFSRecursion(destinations[i].Target);
      }
    }
  }
}
export default DepthSearchGraph;
