// S2_ARR_01 — Clean numbers
// Convert string values to numbers and drop NaN results

function cleanNumbers(arr) {
  const result = [];

  for (const item of arr) {
    const n = +item; // unary plus converts to number
    if (!Number.isNaN(n)) {
      result.push(n);
    }
  }

  return result;
}

// tests
console.log(cleanNumbers([" 1 ", "x", "2"]));         // [1, 2]
console.log(cleanNumbers(["10", " 20 ", "abc", ""])); // [10, 20, 0]
