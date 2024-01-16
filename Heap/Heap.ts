class Heap<T> {
  #dataList: Array<T | null>;
  #size: number;

  constructor() {
    this.#dataList = [];
    this.#size = 0;
  }

  insert(data: T) {
    let i = this.#size;
    this.#dataList[i] = data;
    this.#size++;

    let parent_index = Math.floor((i - 1) / 2);
    while (i != 0 && this.#dataList[i]! < this.#dataList[parent_index]!) {
      this.#dataList[i] = this.#dataList[parent_index];
      this.#dataList[parent_index] = data;
      i = parent_index;
      parent_index = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.#size == 0) return null;
    let i = 0;
    let data = this.#dataList[i];

    this.#dataList[i] = this.#dataList[this.#size - 1];
    this.#dataList[this.#size - 1] = null;
    this.#size--;

    let left_index = 2 * i + 1;
    while (left_index < this.#size) {
      let right_index = 2 * i + 2;

      let smaller_index = left_index;
      if (
        this.#dataList[right_index] != null &&
        this.#dataList[right_index]! < this.#dataList[left_index]!
      ) {
        smaller_index = right_index;
      }

      if (this.#dataList[smaller_index]! >= this.#dataList[i]!) {
        break;
      }

      let temp = this.#dataList[i];
      this.#dataList[i] = this.#dataList[smaller_index];
      this.#dataList[smaller_index] = temp;

      i = smaller_index;
      left_index = 2 * i + 1;
    }

    return data;
  }

  print() {
    let print_data = "";
    for (let i = 0; i < this.#size; i++) {
      print_data += this.#dataList[i] + " - ";
    }
    console.log(print_data);
  }

  size() {
    return this.#size;
  }

  draw() {
    let levels_count = Math.log2(this.#size) + 1;
    let line_width = Math.pow(2, levels_count - 1);

    let j = 0;
    for (let i = 0; i < levels_count; i++) {
      let nodes_count = Math.pow(2, i);
      let space = Math.ceil(line_width - nodes_count / 2);
      let space_between = Math.ceil(levels_count / nodes_count);
      space_between = space_between < 1 ? 1 : space_between;
      let k = j;
      let str = " ".repeat(space + space_between);
      for (; j < k + nodes_count; j++) {
        if (j == this.#size) {
          break;
        }
        if (this.#dataList[j]) {
          str += this.#dataList[j] + " ".repeat(space_between);
        }
      }
      str += " ".repeat(space) + "\n";
      console.log(str);
    }
  }
}

export default Heap;
