let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");

let n = parseInt(input[0]);
let nums = input[1].split(" ").map(Number);

let DP = Array.from({ length: n }, (v, i) => 0);

for (let i = 0; i < DP.length; i++) {
  DP[i] = nums[i];
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) DP[i] = Math.max(DP[i], DP[j] + nums[i]);
  }
}
console.log(Math.max(...DP));
