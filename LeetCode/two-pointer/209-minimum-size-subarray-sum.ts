function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;

  for (right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// test case
const testCase = [
  {
    target: 7,
    nums: [2, 3, 1, 2, 4, 3],
    result: 2,
  },

  {
    target: 4,
    nums: [1, 4, 4],
    result: 1,
  },
  {
    target: 11,
    nums: [1, 1, 1, 1, 1, 1, 1, 1],
    result: 0,
  },
];

for (const test of testCase) {
  console.log(minSubArrayLen(test.target, test.nums));
}
