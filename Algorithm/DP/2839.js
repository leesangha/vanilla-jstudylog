// let fs = require('fs');
// let input = require('fs').readFileSync('예제.txt').toString().split(' ');
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let rest = parseInt(input);
// let rest = 10;
let dp = Array.from({ length: 5010 }, () => -1);
dp[3] = 1;
dp[5] = 1;

for (let i = 3; i <= rest; i++) {
  if (dp[i] === -1) continue;

  if (dp[i - 2] > 0) dp[i + 3] = Math.min(dp[i] + 1, dp[i - 2] + 1);
  else dp[i + 3] = dp[i] + 1;

  dp[i + 5] = dp[i] + 1;
}

console.log(dp[rest]);
