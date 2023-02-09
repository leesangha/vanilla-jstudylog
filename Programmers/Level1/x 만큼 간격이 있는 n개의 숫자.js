function solution(x, n) {
  var answer = Array.from({ length: n }, (value, idx) => x + x * idx);

  return answer;
}
