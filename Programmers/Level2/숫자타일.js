const getMaxDivider = (num) => {
  if (num === 1) return 0;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && num / i <= 1e7) return num / i;
  }
  return 1;
};

// 약수중 가장 큰 약수를 구하는 것이 포인트

function solution(begin, end) {
  var answer = [];
  for (let idx = begin; idx <= end; idx++) {
    answer.push(getMaxDivider(idx));
  }
  return answer;
}
