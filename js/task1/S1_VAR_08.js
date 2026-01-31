// S1_VAR_08 — Big integers

function safeAdd(a, b) {
  const needsBigInt =
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    (Math.abs(a) > Number.MAX_SAFE_INTEGER ||
     Math.abs(b) > Number.MAX_SAFE_INTEGER);

  if (needsBigInt) {
    const result = BigInt(a) + BigInt(b);
    console.log("Using BigInt");
    return result;
  }

  console.log("Using Number");
  return a + b;
}

// Tests
console.log(safeAdd(10, 20));
console.log(safeAdd(Number.MAX_SAFE_INTEGER, 1));
console.log(safeAdd(9007199254740992, 5));
