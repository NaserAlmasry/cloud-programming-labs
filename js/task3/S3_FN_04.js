// S3_FN_04 — count vowels

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const ch of str.toLowerCase()) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

// tests
console.log(countVowels("hello"));      // 2
console.log(countVowels("JAVASCRIPT")); // 3
console.log(countVowels("xyz"));        // 0
