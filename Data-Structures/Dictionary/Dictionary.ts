class Dictionary<Tkey extends string, Tvalue> {
  private entries: Array<KeyValuePair<Tkey, Tvalue>>;
  private entriesCount: number;

  constructor() {
    this.entriesCount = 0;
    this.entries = [];
  }

  set(key: Tkey, value: Tvalue) {
    const index = this.getIndex(key);
    if (index !== null && index !== undefined) {
      this.entries[index].value = value;
      return;
    }

    const newEntry: KeyValuePair<Tkey, Tvalue> = { key, value };
    this.entries[this.entriesCount] = newEntry;
    this.entriesCount++;
  }

  get(key: Tkey) {
    const index = this.getIndex(key);
    if (index !== null && index !== undefined) return this.entries[index].value;
    return null;
  }

  getIndex(key: Tkey): number | null {
    for (let index = 0; index < this.entries.length; index++) {
      if (this.entries[index] && this.entries[index].key === key) {
        return index;
      }
    }
    return null;
  }

  remove(key: Tkey): boolean {
    const index = this.getIndex(key);
    if (index === null || index === undefined) return false;

    this.entries[index].value = this.entries[this.entriesCount - 1].value;
    this.entries[index].key = this.entries[this.entriesCount - 1].key;
    this.entries[this.entriesCount - 1] = {
      key: undefined as any,
      value: undefined as any,
    };
    this.entriesCount--;
    return true;
  }

  print() {
    for (let index = 0; index < this.entries.length; index++) {
      console.log(`element - ${index} -> : `, this.entries[index]);
    }
  }

  Size() {
    return this.entriesCount;
  }
}

interface KeyValuePair<Tkey extends string, Tvalue> {
  key: Tkey;
  value: Tvalue;
}

export default Dictionary;
