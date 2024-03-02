class PriorityQueue<T> {
  private queue: [T, number][]; // Array of tuples [item, priority]

  constructor() {
    this.queue = [];
  }

  public enqueue(item: T, priority: number) {
    this.queue.push([item, priority]);
    this.queue.sort((a, b) => a[1] - b[1]); // Sort by priority
  }

  public dequeue(): T | undefined {
    return this.queue.shift()?.[0];
  }

  public peek(): T | undefined {
    return this.queue[0]?.[0];
  }

  public get count(): number {
    return this.queue.length;
  }
}

export default PriorityQueue;
