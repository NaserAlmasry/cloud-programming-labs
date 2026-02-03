// S3_FN_03 — reverse string

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// tests
console.log(reverseString("hello"));   // "olleh"
console.log(reverseString("abc"));     // "cba"
console.log(reverseString(""));        // ""
