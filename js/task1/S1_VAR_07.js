// S1_VAR_07 — Coercion via unary plus

function toNumberOrNull(x) {
  if (typeof x !== "string") {
    return null;
  }

  const n = +x;

  if (Number.isNaN(n)) {
    return null;
  }

  return n;
}

// Tests
const tests = ["12", "12.5", " 12 ", "12x", ""];

for (const t of tests) {
  console.log(JSON.stringify(t), "=>", toNumberOrNull(t));
}
