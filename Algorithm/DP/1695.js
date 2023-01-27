let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let len = parseInt(input[0]);
let str = input[1].split(" ").join("");
let rev = str.split("").reverse().join("");

let DP = Array.from({ length: str.length + 1 }, () =>
  Array(str.length + 1).fill(0)
);

for (let i = 1; i <= str.length; i++) {
  for (let j = 1; j <= str.length; j++) {
    if (str[i] === rev[j]) DP[i][j] = DP[i - 1][j - 1] + 1;
    else DP[i][j] = Math.max(DP[i - 1][j], [DP[i][j - 1]]);
  }
}

console.log(len - DP[len][len]);
