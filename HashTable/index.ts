import HashTable from "./HashTable";
import Hash from "./Hash";

const hashTable = new HashTable();
const hash = new Hash();
// hash.Hash32("This is Original Text");

hashTable.print();
hashTable.Set("1", "sinar@gmail.com");
hashTable.Set("2", "elvis@gmail.com");
hashTable.Set("3", "tane@gmail.com");
hashTable.Set("4", "tanes@gmail.com");
hashTable.Set("5", "tanes@gmail.com");
hashTable.Set("6", "tanes@gmail.com");
hashTable.Set("16", "tanes@gmail.com");
hashTable.Set("7", "tanes@gmail.com");
hashTable.print();
hashTable.Set("8", "tanes@gmail.com");
hashTable.Set("9", "tanes@gmail.com");
hashTable.print();
