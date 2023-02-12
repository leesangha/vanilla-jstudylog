function solution(n, computers) {
  var answer = 0;
  let visited = Array(n).fill(false);
  let queue = [];

  const DFS = (num) => {
    queue.push(num);
    while (queue.length > 0) {
      let i = queue.pop();
      visited[i] = true;
      let link = computers[i];
      for (let j = 0; j < link.length; j++) {
        if (!visited[j] && link[j] === 1) queue.push(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}
