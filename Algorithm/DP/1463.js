let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split(" ");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let rest = parseInt(input);
// let rest = 10;
let dp = Array.from({ length: rest + 1 }, () => Infinity);

dp[0] = 0;
dp[1] = 0;
dp[2] = 1;

for (let i = 3; i <= rest; i++) {
  let three = i % 3 === 0 ? dp[i / 3] : Infinity;
  let two = i % 2 === 0 ? dp[i / 2] : Infinity;
  let one = dp[i - 1];

  let min = Math.min(three, two, one);
  //   console.log(min);
  dp[i] = min + 1;
}

console.log(dp[rest]);
