// const input = `9 2
// 3 2 5 5 6 4 4 5 7`.toString()
// .trim()
// .split("\n")
// .map((v) => v.split(" ").map(Number));

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let [len, maxCount] = input[0];
let numbers = input[1];

let cnt = new Array(100001).fill(0);
let left = 0;
let right = 0;
let ans = 0;
while (left <= right) {
  if (right <= len - 1 && cnt[numbers[right]] < maxCount) {
    cnt[numbers[right]]++;
    right++;
  } else if (cnt[numbers[right]] == maxCount) {
    cnt[numbers[left]]--;
    left++;
  }
  ans = Math.max(ans, right - left);
  if (right === len) break;
}
console.log(ans);
