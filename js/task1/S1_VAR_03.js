// S1_VAR_03 — "const is not immutable"

const user = {
  name: "Ala",
  tags: [],
};

user.tags.push("student");
user.tags.push("javascript");

console.log("After pushing tags:", user);

try {
  user = {};
} catch (err) {
  console.log("Reassigning const throws error:", err.message);
}
