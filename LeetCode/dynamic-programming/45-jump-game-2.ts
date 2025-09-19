function jump(nums: number[]): number {
  let lastIndex = nums.length;
  // jump count
  let dp = new Array(nums.length).fill(1000000);
  dp[0] = 0;

  //
  for (let i = 0; i < nums.length; i++) {
    let range = nums[i];
    for (let j = 1; j <= range; j++) {
      if (i + j <= lastIndex - 1) {
        dp[i + j] = Math.min(dp[i] + 1, dp[i + j]);
      } else {
        dp[lastIndex - 1] = Math.min(dp[i] + 1, dp[lastIndex - 1]);
      }
    }
  }
  return dp.pop();
}

function jump2(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  return jumps;
}
