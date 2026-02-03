// S3_FN_02 — check even number

function isEven(n) {
  return n % 2 === 0;
}

// tests
console.log(isEven(2));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true
console.log(isEven(-4));  // true
