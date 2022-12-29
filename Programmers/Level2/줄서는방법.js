const factorial = (n) => {
  let result = 1;
  for (var i = 2; i <= n; i++) result *= i;
  return result;
};

function solution(n, k) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, idx) => idx + 1);
  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = (nth / fact) >> 0;
    nth = nth % fact;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}
