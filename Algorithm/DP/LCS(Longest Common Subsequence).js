let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");

let str1 = input[0];
let str2 = input[1];
// str1;
// str2;

let DP = Array.from({ length: str1.length + 1 }, () =>
  Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) DP[i][j] = DP[i - 1][j - 1] + 1;
    else DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j]);
    // console.log([i,j])
  }
}
// DP;
console.log(DP[str1.length][str2.length]);
