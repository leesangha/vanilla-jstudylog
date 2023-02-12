function solution(x, y, n) {
  if (x === y) return 0;
  var answer = 0;
  let DP = {};
  DP[x] = 0;

  let queue = [x];
  while (queue.length > 0) {
    let arr = [];

    for (q of queue) {
      for (elem of [q + n, q * 2, q * 3]) {
        if (elem > y || DP[elem]) continue;
        if (elem === y) return DP[q] + 1;
        DP[elem] = DP[q] + 1;
        arr.push(elem);
      }
    }
    queue = arr;
  }

  return answer === 0 ? -1 : answer;
}
