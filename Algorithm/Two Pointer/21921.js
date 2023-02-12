// const input = ['5 2','1 4 2 5 1'];
// const input = ['7 5','1 1 1 1 1 5 1']
// const input = ['5 3','0 0 0 0 0']

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, X] = input.shift();
const visited = input[0].split("").map(Number);
function solution(N, X, visited) {
  let [MAX, day, total] = [0, 1, 0];
  // total 구하기
  for (let i = 0; i < X; i++) {
    console.log(visited[i]);
    total += visited[i];
  }

  MAX = Math.max(MAX, total);
  for (let j = 1; j <= N - X; j++) {
    total -= visited[j - 1];
    total += visited[j + X - 1];
    if (total === MAX) day += 1;
    else {
      if (total > MAX) day = 1;
      MAX = Math.max(total, MAX);
    }
  }
  return [MAX, day];
}

const result = solution(N, X, visited);
result[0] === 0 ? console.log("SAD") : result.map((v) => console.log(v));
