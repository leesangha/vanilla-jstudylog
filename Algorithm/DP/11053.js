let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");

let len = input[0];
let nums = input[1].split(" ").map(Number);

let DP = Array.from({ length: len }, () => 0);

for (let i = 0; i < nums.length; i++) {
  DP[i] = 1;
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }
}

console.log(Math.max(...DP));
