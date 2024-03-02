import { mergeSort } from "./sort";

function print_items(bag: Knapsack): void {
  console.log("----------------------------");
  console.log("total value: " + bag.totalValue);
  console.log("current capacity: " + bag.currentCapacity);
  console.log("items:");
  console.log("n\tv\tw");
  for (let i = 0; i < bag.items.length; i++) {
    console.log(
      bag.items[i].name + "\t" + bag.items[i].value + "\t" + bag.items[i].weight
    );
  }
}

function print_array(items: Item[]): void {
  console.log("n\tv\tw\tr");
  for (let i = 0; i < items.length; i++) {
    console.log(
      items[i].name +
        "\t" +
        items[i].value +
        "\t" +
        items[i].weight +
        "\t" +
        items[i].ratio
    );
  }
}

export class Item {
  ratio: number;
  constructor(
    public name: string,
    public value: number,
    public weight: number
  ) {
    this.ratio = value / weight;
  }
}

class Knapsack {
  items: Item[] = [];
  maxCapacity: number = 0;
  currentCapacity: number = 0;
  totalValue: number = 0;

  constructor(maxCapacity: number) {
    this.maxCapacity = maxCapacity;
  }

  addItem(newItem: Item) {
    const diff = this.maxCapacity - this.currentCapacity;

    if (!newItem) return;
    if (newItem.weight > diff) {
      newItem.weight = diff;
      newItem.value = diff * newItem.ratio;
    }

    this.items.push(newItem);
    this.currentCapacity += newItem.weight;
    this.totalValue += newItem.value;
  }
}

const values = [4, 9, 12, 11, 6, 5];
const weights = [1, 2, 10, 4, 3, 5];
const items = values.map((val, i) => {
  const newItem = new Item(i.toString(), val, weights[i]!);
  return newItem;
});

mergeSort(items, 0, items.length - 1);
items.reverse();
print_array(items);

const bag = new Knapsack(12);

let j = 0;
while (bag.currentCapacity < bag.maxCapacity && j < items.length) {
  bag.addItem(items[j++]);
}

print_items(bag);
