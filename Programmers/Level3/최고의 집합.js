function solution(n, s) {
  let answer = Array.from({ length: n }, () => 0);
  if (n > s) return [-1];

  let x = Math.floor(s / n);
  let rest = s - x * n;
  // console.log(x,rest);
  answer.fill(x);
  for (let i = 0; i < rest; i++) answer[i] += 1;

  return answer.sort();
}
