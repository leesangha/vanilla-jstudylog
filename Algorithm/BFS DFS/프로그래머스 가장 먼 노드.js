function solution(n, edge) {
  edge.sort();
  var answer = 0;
  let link = Array(n + 1).fill([]);
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(0);

  // initialize
  edge.forEach((eg) => {
    let [start, end] = eg;
    link[start] = [...link[start], end];
    link[end] = [...link[end], start];
  });

  // queue 삽입
  let queue = [1];

  while (queue.length > 0) {
    let node = queue.shift();
    if (visited[node]) continue;
    visited[node] = true;
    // console.log(node,"방문함")

    link[node].forEach((k) => {
      if (!visited[k] && !queue.includes(k)) {
        // console.log(k);
        distance[k] = distance[node] + 1;
        queue.push(k);
      }
    });
    // console.log('----')
  }

  // console.log(distance);
  let max = Math.max(...distance);
  answer = distance.filter((d) => d === max).length;

  return answer;
}
