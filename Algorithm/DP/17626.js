// let fs = require('fs');
// let input = require('fs').readFileSync('예제.txt').toString().split(' ');
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let rest = parseInt(input);
// let rest = 11339;
let dp = Array.from({ length: 50001 }, () => Infinity);

dp[0] = 0;
dp[1] = 1;

for (i = 2; i <= rest; i++) {
  let min = Infinity;
  for (let j = 1; j < Math.floor(Math.sqrt(i)) + 1; j++) {
    min = Math.min(min, dp[i - j * j]);
  }
  dp[i] = min + 1;
}

console.log(dp[rest]);
