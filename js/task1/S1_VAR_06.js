// S1_VAR_06 — NaN pitfalls

function classifyNumberLike(x) {
  if (Number.isNaN(x)) {
    return "nan";
  }

  if (typeof x === "number") {
    return "number";
  }

  return "not-a-number";
}

// Tests
const tests = [NaN, 0, "0", "abc", undefined];

for (const t of tests) {
  console.log(t, "=>", classifyNumberLike(t));
}
