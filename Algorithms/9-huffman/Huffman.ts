import PriorityQueue from "./PriorityQueue";

class HeapNode {
  left: HeapNode | null;
  right: HeapNode | null;
  constructor(public data: string, public freq: number) {
    this.left = null;
    this.right = null;
  }
}

class Huffman {
  private internal_char: string = String.fromCharCode(0);
  public codes: { [key: string]: string } = {};
  private minHeap: PriorityQueue<HeapNode>;

  constructor(message: string) {
    this.minHeap = new PriorityQueue<HeapNode>();

    // Get the characters' frequencies
    const freqHash: { [key: string]: number } = {};
    for (const char of message) {
      freqHash[char] = (freqHash[char] || 0) + 1;
    }

    // Convert Hashtable to Queue (minHeap)
    for (const char in freqHash) {
      const newNode = new HeapNode(char, freqHash[char]);
      this.minHeap.enqueue(newNode, freqHash[char]);
    }

    // Build Huffman tree
    while (this.minHeap.count !== 1) {
      const left = this.minHeap.dequeue()!;
      const right = this.minHeap.dequeue()!;
      const newFreq = left.freq + right.freq;
      const top = new HeapNode(this.internal_char, newFreq);
      top.right = right;
      top.left = left;
      this.minHeap.enqueue(top, newFreq);
    }

    // Generate Codes
    this.generateCodes(this.minHeap.peek()!, "");
  }

  private generateCodes(node: HeapNode, str: string) {
    if (!node) {
      return;
    }
    if (node.data !== this.internal_char) {
      this.codes[node.data] = str;
    }
    this.generateCodes(node.left!, str + "0");
    this.generateCodes(node.right!, str + "1");
  }
}

export default Huffman;
