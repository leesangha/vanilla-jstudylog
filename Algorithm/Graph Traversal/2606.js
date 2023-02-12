let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let node = input.shift();
let len = input.shift();

let state = {};
let link = input.map((i) => i.split(" ").map(Number));
let visited = {};
let queue = [1];

for (let j = 1; j <= node; j++) {
  state[j] = [];
  if (j === 1) visited[j] = true;
  visited[j] = false;
}

// state initialize
for (let i = 0; i < len; i++) {
  let [num1, num2] = link[i];
  state[num1].push(num2);
  state[num2].push(num1);
}

while (queue.length > 0) {
  let num = queue.shift();
  if (!visited[num]) {
    visited[num] = true;
    state[num].forEach((v) => {
      if (!visited[v]) queue.push(v);
    });
  }
}

console.log(Object.values(visited).filter((_) => _ === true).length - 1);
