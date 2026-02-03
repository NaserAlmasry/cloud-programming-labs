// S2_ARR_05 - compute min, max, average

function stats(nums) {
  if (!nums.length) return null;

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
    sum += n;
  }

  return {
    min,
    max,
    avg: sum / nums.length
  };
}

// tests
console.log(stats([1, 2, 3, 4])); 
console.log(stats([10]));
console.log(stats([]));
