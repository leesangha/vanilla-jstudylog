let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toStrinag().split("\n");
let input = require("fs").readFileSync("예제.txt").toString().split("\n");

console.log(input);

let len = input.shift();
input = input.map(Number);
let DP = Array(len).fill([]);

// 정의 두칸 넘어온 경우 DP[0][0] 한칸씩 넘어온 경우 DP[0][1]
DP[0] = [input[0], 0];
DP[1] = [input[1], input[0] + input[1]];

for (let i = 2; i < len; i++) {
  DP[i] = [Math.max(...DP[i - 2]) + input[i], DP[i - 1][0] + input[i]];
}

console.log(Math.max(...DP[len - 1]));
