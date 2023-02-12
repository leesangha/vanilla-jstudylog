// let input = 5;
// let state = [2,1,2,1,2,1];

// let input = require('fs').readFileSync('예제.txt').toString().split(' ');
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let rest = parseInt(input);
let dp = Array.from({ length: 1005 }, () => "");
dp[1] = "SK";

for (let i = 1; i <= rest; i++) {
  if (dp[i] === "SK") {
    dp[i + 1] = "CY";
    dp[i + 3] = "CY";
  } else {
    dp[i + 1] = "SK";
    dp[i + 3] = "SK";
  }
}

console.log(dp[rest]);
