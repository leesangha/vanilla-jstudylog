let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

// 도시개수 N, 도로개수 M, 거리정보 K, 출발도시 번호 X
let [N, M, K, X] = input.shift().split(" ");

let routes = input.map((_) => _.split(" ").map(Number));
let DP = Array.from({ length: parseInt(N) + 1 }, () =>
  Array(parseInt(N) + 1).fill(Infinity)
);
let link = Array.from({ length: parseInt(N) + 1 }, () => []);
let visited = Array(parseInt(N + 1)).fill(false);

for (let i = 0; i < routes.length; i++) {
  let [s, e] = routes[i];
  link[s].push(e);
  DP[s][e] = 1;
}

let start = parseInt(X);
let queue = [start];

while (queue.length > 0) {
  let node = queue.shift();

  if (visited[node]) continue;
  else visited[node] = true;

  let nextNodes = link[node];

  nextNodes.forEach((n) => {
    link[n].forEach((l) => {
      DP[node][l] = Math.min(DP[node][l], DP[node][n] + DP[n][l]);
    });
  });
  queue.push(...nextNodes);
}

let ans = [];
DP[start].forEach((cur, idx) => {
  if (cur === parseInt(K)) {
    ans.push(idx);
    console.log(idx);
  }
});

if (ans.length === 0) console.log(-1);
