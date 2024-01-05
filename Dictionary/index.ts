import Dictionary from "./Dictionary";

const d1 = new Dictionary<string, string>();

d1.set("name", "Yousef Shaban");
d1.set("age", "25");
d1.set("country", "Egypt");
d1.print();

const e1 = d1.getIndex("name");
console.log({ e1 });

d1.remove("name");
d1.set("name", "Yousef Shabans");

d1.print();
