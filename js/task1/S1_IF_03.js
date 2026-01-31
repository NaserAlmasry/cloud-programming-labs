// S1_IF_03 — Truthy/falsy guard

function normalizeName(input) {
  if (!input) {
    return "Anonymous";
  }
  return input.trim();
}

// tests
console.log(normalizeName(""));        // Anonymous
console.log(normalizeName(" "));       // ""
console.log(normalizeName(null));      // Anonymous
console.log(normalizeName(" Ola "));   // Ola
