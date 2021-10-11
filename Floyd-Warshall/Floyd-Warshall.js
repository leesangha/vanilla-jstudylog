const INF = Infinity;

const floydWarshall = function (dist) {
  const len = dist.length;
  for (let i = 0; i < len; i++) {
    //i는 경유 노드;
    for (let j = 0; j < len; j++) {
      //j는 시작 노드;
      for (let k = 0; k < len; k++) {
        //k는 도착 노드;
        if (dist[j][k] > dist[j][i] + dist[i][k])
          dist[j][k] = dist[j][i] + dist[i][k];
      }
    }
  }
};

const main = (function () {
  const graph = [
    [0, 5, INF, 8],
    [7, 0, 9, INF],
    [2, INF, 0, 4],
    [INF, INF, 3, 0],
  ];

  floydWarshall(graph);

  for (let i = 0; i < graph.length; i++) console.log(graph[i]);
})();
