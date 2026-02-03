// S3_FN_02 — Sort by property using arrow function

const people = [
  { name: "Ala", age: 30 },
  { name: "Ola", age: 20 },
  { name: "Jan", age: 40 },
];

// sort by age ascending
people.sort((a, b) => a.age - b.age);

// tests
console.log(people);
/*
[
  { name: 'Ola', age: 20 },
  { name: 'Ala', age: 30 },
  { name: 'Jan', age: 40 }
]
*/
