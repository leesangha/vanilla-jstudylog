let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");

let [n, k] = input.shift().split(" ").map(Number);
let coins = input.map(Number);

let DP = Array.from({ length: k + 1 }, () => 0);

DP[0] = 1;
// DP
for (let i = 0; i < coins.length; i++) {
  for (let j = coins[i]; j <= k; j++) {
    DP[j] += DP[j - coins[i]];
  }
}

console.log(DP);
