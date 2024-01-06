import Hash from "./Hash";

class HashTable<Tkey extends string, Tvalue> {
  private entries: Array<KeyValuePair<Tkey, Tvalue>>;
  private entriesCount: number;
  private initialSize: number;

  constructor() {
    this.entriesCount = 0;
    this.initialSize = 7;
    this.entries = new Array(this.initialSize);
  }

  getHash(key: Tkey): number {
    const hash = new Hash().Hash32(key.toString());
    return Number(hash % (this.entries.length >>> 0));
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

  Set(key: Tkey, value: Tvalue) {
    this.ResizeOrNot();
    this.addToEntries(key, value);
  }

  get(key: Tkey) {
    const index = this.getIndex(key);
    if (index !== null && index !== undefined) return this.entries[index].value;
    return null;
  }

  Get(key: Tkey) {
    let hash = this.getHash(key);
    if (this.entries[hash] !== null && this.entries[hash].key !== key) {
      hash = this.collisionHandling(key, hash, false);
    }
    if (hash === -1 || this.entries[hash] === null) {
      return null;
    }

    if (this.entries[hash].key === key) {
      return this.entries[hash].value;
    } else {
      console.log("Invalid HashTable");
      return;
    }
  }

  collisionHandling(key: Tkey, hash: number, set: boolean) {
    let newHash: number;
    for (let i = 1; i < this.entries.length; i++) {
      newHash = (hash + i) % this.entries.length;
      console.log(
        "[coll] " + key.toString() + " " + hash + ", new hash: " + newHash
      );
      if (set && (!this.entries[newHash] || this.entries[newHash].key == key)) {
        return newHash;
      } else if (!set && this.entries[newHash].key == key) {
        return newHash;
      }
    }
    return -1;
  }

  addToEntries(key: Tkey, value: Tvalue) {
    let hash = this.getHash(key);
    if (
      this.entries[hash]?.key !== undefined &&
      this.entries[hash]?.key !== key
    ) {
      hash = this.collisionHandling(key, hash, true);
    }
    if (hash === -1) {
      console.log("Invalid HashTable");
      return;
    }
    if (!this.entries[hash] || this.entries[hash]?.key === undefined) {
      const newEntry = { key, value };
      this.entries[hash] = newEntry;
      this.entriesCount++;
    } else if (this.entries[hash]?.key === key) {
      this.entries[hash].value = value;
    } else {
      console.log("Invalid HashTable");
      return;
    }
  }

  ResizeOrNot() {
    if (this.entriesCount < this.entries.length) {
      return;
    }
    const newSize = this.entries.length * 2;

    console.log(`[resize] from ${this.entries.length} to ${newSize}`);

    const entriesCopy = [...this.entries];

    this.entries = new Array(newSize);
    this.entriesCount = 0;

    for (let i = 0; i < entriesCopy.length; i++) {
      if (entriesCopy[i]?.key === undefined || entriesCopy[i] === undefined) {
        continue;
      }
      this.addToEntries(entriesCopy[i].key, entriesCopy[i].value);
    }
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

export default HashTable;
