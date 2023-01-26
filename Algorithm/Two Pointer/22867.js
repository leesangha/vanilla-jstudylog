let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let max = 0;
let cnt = 0;
let left = 0;

for (let right = 0; right < n; right++) {
  if (nums[right] % 2 === 1) cnt++;
  while (cnt > k) {
    if (nums[left] % 2 === 1) cnt--;
    left++;
  }
  if (cnt <= k) max = Math.max(max, right - left - cnt + 1);
}
console.log(max);
