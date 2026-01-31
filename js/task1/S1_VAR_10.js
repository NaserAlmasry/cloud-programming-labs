// S1_VAR_10 — Mini debugger

function inspect(value) {
  return {
    type: typeof value,
    isArray: Array.isArray(value),
    isNull: value === null,
    isNaN: Number.isNaN(value),
  };
}

// Tests
const values = [
  null,
  undefined,
  0,
  NaN,
  "text",
  [],
  {},
  () => {}
];

for (const v of values) {
  console.log(v, "=>", inspect(v));
}
