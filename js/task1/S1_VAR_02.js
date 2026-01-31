// S1_VAR_02 — Block scope check

try {
  {
    let x = 10;
  }
  console.log(x);
} catch (err) {
  console.log("let is block-scoped: x is not accessible outside the block");
}

try {
  {
    var y = 20;
  }
  console.log("var works outside block, y =", y);
} catch (err) {
  console.log(err.message);
}

// Explanation:
// let is limited to the block {} it is declared in.
// var is function-scoped, so it exists outside the block.
