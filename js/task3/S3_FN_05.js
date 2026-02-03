// S3_FN_05 — Higher-order predicate with atLeast

const atLeast = (min) => (n) => n >= min;

// tests
const nums = [1, 3, 5, 7, 9];

const atLeast5 = atLeast(5);

console.log(nums.filter(atLeast5)); // [5, 7, 9]
console.log(nums.filter(atLeast(8))); // [9]
