// S3_FN_04 — Sum of squares of even numbers using map/filter/reduce

const nums = [1, 2, 3, 4, 5, 6];

const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum, n) => sum + n, 0);

// tests
console.log(result); // 56  (2² + 4² + 6² = 4 + 16 + 36)
