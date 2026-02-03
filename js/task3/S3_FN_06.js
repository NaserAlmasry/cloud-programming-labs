// S3_FN_06 — find largest number

function findMax(nums) {
  if (nums.length === 0) return null;

  let max = nums[0];

  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }

  return max;
}

// tests
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-10, -3, -7]));  // -3
console.log(findMax([4]));            // 4
console.log(findMax([]));             // null
