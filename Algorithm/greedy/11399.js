function solution(n, list) {
  const times = list
    .split("\n")[1]
    .split(" ")
    .sort((a, b) => a - b);
  const sum = list.reduce(
    (acc, cur, idx) => acc + Number(cur) * (times.length - idx),
    0
  );

  console.log(sum);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  //여러줄 입력
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  //띄어쓰기 기준으로 배열에 넣기
  let list = input[1].split(" ").map((el) => parseInt(el));
  solution(n, list);
  process.exit();
});
