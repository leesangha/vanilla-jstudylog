let input = ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"];

let [n, edge, start] = input.shift().split(" ").map(Number);
let grph = [...Array(n + 1)].map((e) => []);

const bfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length > 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      let next = graph[node];
      // 오름 차순
      needVisit = [...needVisit, ...next.sort((a, b) => a - b)];
    }
  }
};

const dfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      let next = graph[node];
      // 내림 차순
      needVisit = [...needVisit, ...next.sort((a, b) => b - a)];
    }
  }
};

for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  grph[from].push(to);
  grph[to].push(from);
}

console.log(dfs(grph, start).join(" "));
console.log(bfs(grph, start).join(" "));
