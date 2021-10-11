const INF = Infinity;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];
const Visited = new Array(6).fill(false);

const getMin = function (vertex) {
  let min = INF;
  let idx = 0;
  for (let i = 0; i < vertex.length; i++) {
    if (min > vertex[i] && !Visited[i]) {
      min = vertex[i];
      idx = i;
    }
  }
  return idx;
};

const dist = function (start) {
  let status = arr[start - 1];
  let current = arr[start - 1];
  let min = 0;
  Visited[start - 1] = true;

  for (let i = 0; i < arr.length; i++) {
    let idx = getMin(current);
    min += current[idx];
    //min은 현재까지 사용한 비용
    let next = arr[idx];
    next.forEach((value, i) => {
      if (status[i] > min + value && !Visited[i]) status[i] = min + value;
    });
    Visited[idx] = true;
    current = next;
  }
  console.log(status);
};

const main = (function () {
  dist(1);
  //answer [0,2,3,1,2,4]
})();
