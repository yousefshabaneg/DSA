import Graph, { Edge, Vertex } from "./Graph";

class DijkstraGraph extends Graph {
  Dijkstra() {
    console.log("Dijkstra From Graph Class;");
    for (let i = 1; i < this.Vertices.length; i++) {
      this.Vertices[i].TotalLength = Number.MAX_SAFE_INTEGER;
    }

    let current_vertex: Vertex;
    for (let i = 0; i < this.Vertices.length; i++) {
      current_vertex = this.Vertices[i];
      let destinations: Edge[] = current_vertex.VertexLinks;
      if (destinations == null) continue;

      let current_edge: Edge;
      for (let j = 0; j < destinations.length; j++) {
        current_edge = destinations[j];
        let new_length: number =
          current_vertex.TotalLength + current_edge.Weight;
        if (new_length < current_edge.Target.TotalLength) {
          current_edge.Target.TotalLength = new_length;
          current_edge.Target.SourceOfTotalLength = current_vertex;
        }
      }
    }

    let path: string = this.Vertices[this.Vertices.length - 1].Name;
    let v: Vertex = this.Vertices[this.Vertices.length - 1];
    while (v.SourceOfTotalLength != null) {
      path = v.SourceOfTotalLength.Name + " - " + path;
      v = v.SourceOfTotalLength;
    }
    console.log(this.Vertices[this.Vertices.length - 1].TotalLength);
    console.log(path);

    this.resetVerticesStatus();
  }
}

export default DijkstraGraph;
