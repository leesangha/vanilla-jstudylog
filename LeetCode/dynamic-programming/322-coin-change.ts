function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  // dp[i] represents the minimum number of coins needed to make amount i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed to make amount 0

  // For each amount from 1 to target amount
  for (let i = 1; i <= amount; i++) {
    // Try each coin
    for (const coin of coins) {
      // If coin value is less than or equal to current amount
      if (coin <= i) {
        // Update dp[i] with minimum coins needed
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // If dp[amount] is still Infinity, it's impossible to make the amount
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// // Test cases
// console.log(coinChange([1, 3, 4], 6)); // 2 (3 + 3)
// console.log(coinChange([2], 3)); // -1 (impossible)
// console.log(coinChange([1], 0)); // 0
// console.log(coinChange([1, 2, 5], 11)); // 3 (5 + 5 + 1)
