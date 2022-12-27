function solution(k, ranges) {
  let answer = [];
  let all = 0;
  let sum = [0];
  let num = k;

  while (num !== 1) {
    if (num % 2 === 0) {
      all += (num + num / 2) / 2;
      sum.push(all);
      num = num / 2;
    } else {
      all += (num + num * 3 + 1) / 2;
      sum.push(all);
      num = num * 3 + 1;
    }
  }

  let limit = sum.length - 1;

  for (let i = 0; i < ranges.length; i++) {
    let [a, b] = ranges[i];
    // limit 초과시 0
    if (a - b > limit) answer.push((-1).toFixed(1));
    else answer.push((sum[limit + b] - sum[a]).toFixed(1));
  }
  // console.log(sum);
  // console.log(answer);
  return answer;
}
