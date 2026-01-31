// S1_VAR_01 — Declare & observe

var text = "hello";
let count = 42;
const active = true;

const rows = [
  { name: "text", value: text, type: typeof text },
  { name: "count", value: count, type: typeof count },
  { name: "active", value: active, type: typeof active },
];

console.table(rows);

