import Queue from "../../../Data-Structures/Queue/Queue";

class Vertex {
  Name: string;
  Visited: boolean;
  VertexLinks: Edge[];

  TotalLength: number;
  SourceOfTotalLength?: Vertex;

  constructor() {
    this.Name = "";
    this.Visited = false;
    this.VertexLinks = [];
    this.TotalLength = 0;
  }
}

class Edge {
  Weight: number;
  Source: Vertex;
  Target: Vertex;

  constructor(source: Vertex, target: Vertex, weight: number = 0) {
    this.Source = source;
    this.Target = target;
    this.Weight = weight;
  }
}

class Graph {
  private last_index: number = 0;
  Vertices: Vertex[];

  constructor(names: string[]) {
    this.Vertices = new Array<Vertex>(names.length);
    names.forEach((name) => {
      this.Vertices[this.last_index] = new Vertex();
      this.Vertices[this.last_index].Name = name;
      this.last_index++;
    });
  }

  AddEdges(vertexIndex: number, targets: number[], weights?: number[]): void {
    this.Vertices[vertexIndex].VertexLinks = new Array<Edge>(targets.length);
    for (let i = 0; i < targets.length; i++) {
      this.Vertices[vertexIndex].VertexLinks[i] = new Edge(
        this.Vertices[vertexIndex],
        this.Vertices[targets[i]],
        weights?.length ? weights[i] : 0
      );
    }
  }

  resetVerticesStatus(): void {
    this.Vertices.forEach((v) => {
      v.Visited = false;
    });
  }
}

export default Graph;
export { Vertex, Edge, Graph };
