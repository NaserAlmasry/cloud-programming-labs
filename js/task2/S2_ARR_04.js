// S2_ARR_04 — Flatten array one level

function flatten1(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

// tests
console.log(flatten1([1, [2, 3], [4], 5]));   // [1,2,3,4,5]
console.log(flatten1([[1], [2], [3]]));      // [1,2,3]
console.log(flatten1([1, 2, 3]));             // [1,2,3]
