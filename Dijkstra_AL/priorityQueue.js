let N = 5;
let road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
let K = 3;
let result = 4;
//문제 출처 https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript

function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity); //거리 정보
  const adj = Array.from({ length: N + 1 }, () => []); //인접 정보 넣기위한 배열선언

  // 1-1. 간선정보 매핑
  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  });

  // 2. 시작지점 세팅 ex-> 1번부터 시작
  const pq = [{ to: 1, time: 0 }];
  dist[1] = 0;

  // 3. 큐가 빌때까지 반복
  while (pq.length) {
    //처음에 1이들어옴
    let { to, time } = pq.pop();

    // 4. 현재 도달한 노드에서 연결된 노드들
    adj[to].forEach((next) => {
      //dist[next.to] => 목적지 노드의 현재 최단거리정보
      //dist[to] => 현재까지 오는데 사용한 비용
      //next.time -> 다음 노드에서 목적지까지 가는 비용
      if (dist[next.to] > dist[to] + next.time) {
        dist[next.to] = dist[to] + next.time;
        pq.push(next);
      }
    });
    // console.log(pq);
  }

  return dist.filter((item) => item <= K).length;
}
let answer = solution(N, road, K);
console.log(answer);
