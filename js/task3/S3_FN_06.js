// S3_FN_06 — Map object values with an arrow function

const mapValues = (obj, fn) => {
  const result = {};

  for (const key in obj) {
    result[key] = fn(obj[key]);
  }

  return result;
};

// tests
const data = { a: 1, b: 2, c: 3 };

console.log(mapValues(data, x => x * 2));
// { a: 2, b: 4, c: 6 }

console.log(mapValues(data, x => x + 1));
// { a: 2, b: 3, c: 4 }

console.log(data); // unchanged
